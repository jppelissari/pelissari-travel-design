interface ApiRequest {
  method?: string;
  body?: unknown;
}

interface ApiResponse {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
}

type LeadPayload = Record<string, string | boolean>;

const requiredFields = [
  'name',
  'email',
  'whatsapp',
  'destination',
  'dateWindow',
  'duration',
  'travelers',
  'budget',
  'alreadyBooked',
  'biggestConcern',
] as const;

const sanitize = (value: unknown, maxLength = 2000) =>
  String(value ?? '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLength);

const parseBody = (body: unknown): Record<string, unknown> => {
  if (typeof body === 'string') return JSON.parse(body) as Record<string, unknown>;
  if (body && typeof body === 'object') return body as Record<string, unknown>;
  return {};
};

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    const raw = parseBody(request.body);
    const payload: LeadPayload = {
      name: sanitize(raw.name, 200),
      email: sanitize(raw.email, 320).toLowerCase(),
      whatsapp: sanitize(raw.whatsapp, 100),
      destination: sanitize(raw.destination, 300),
      dateWindow: sanitize(raw.dateWindow, 300),
      duration: sanitize(raw.duration, 100),
      travelers: sanitize(raw.travelers, 100),
      occasion: sanitize(raw.occasion, 300),
      budget: sanitize(raw.budget, 200),
      alreadyBooked: sanitize(raw.alreadyBooked),
      biggestConcern: sanitize(raw.biggestConcern),
      consent: raw.consent === true,
      source: sanitize(raw.source, 100),
      submittedAt: sanitize(raw.submittedAt, 100) || new Date().toISOString(),
      userAgent: sanitize(raw.userAgent, 500),
      pageUrl: sanitize(raw.pageUrl, 1000),
    };

    const missing = requiredFields.filter(field => !payload[field]);
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email));

    if (missing.length > 0 || !emailIsValid || payload.consent !== true) {
      return response.status(400).json({ error: 'Revise os campos obrigatórios e tente novamente.' });
    }

    const deliveryAttempts: Promise<Response>[] = [];

    if (process.env.FIT_CALL_WEBHOOK_URL) {
      deliveryAttempts.push(fetch(process.env.FIT_CALL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }));
    }

    if (process.env.RESEND_API_KEY && process.env.FIT_CALL_TO_EMAIL && process.env.FIT_CALL_FROM_EMAIL) {
      const text = Object.entries(payload).map(([key, value]) => `${key}: ${value}`).join('\n');
      deliveryAttempts.push(fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.FIT_CALL_FROM_EMAIL,
          to: [process.env.FIT_CALL_TO_EMAIL],
          subject: `Novo diagnóstico: ${payload.name} — ${payload.destination}`,
          text,
        }),
      }));
    }

    if (deliveryAttempts.length === 0) {
      if (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production') {
        return response.status(500).json({ error: 'Não foi possível enviar sua solicitação agora.' });
      }

      console.log('[fit-call development payload]', payload);
      return response.status(202).json({ ok: true });
    }

    const results = await Promise.allSettled(deliveryAttempts);
    const delivered = results.some(result => result.status === 'fulfilled' && result.value.ok);

    if (!delivered) {
      console.error('[fit-call delivery failure]', results);
      return response.status(500).json({ error: 'Não foi possível enviar sua solicitação agora.' });
    }

    return response.status(202).json({ ok: true });
  } catch (error) {
    console.error('[fit-call error]', error);
    return response.status(500).json({ error: 'Não foi possível enviar sua solicitação agora.' });
  }
}
