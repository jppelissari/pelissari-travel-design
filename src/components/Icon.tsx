/**
 * Centralized icon abstraction for ELUZA.
 *
 * Backed by Lucide React. Each icon is named semantically so the
 * registry can be extended without touching call sites.
 *
 * Future direction: shadcn/ui for component infrastructure; Lucide
 * remains the icon source. A full call-site migration pass is planned
 * after shadcn/ui initialization.
 *
 * Usage:
 *   <Icon name="route" size={16} aria-label="Route map" />
 *   <Icon name="calendar" size={20} aria-hidden />
 */

import React from 'react';
import {
  Compass,
  Calendar,
  Building2,
  UtensilsCrossed,
  Car,
  Star,
  AlertTriangle,
  MessageCircle,
  CheckCircle2,
  Lock,
  Unlock,
  FileText,
  Home,
  BookOpen,
  Map,
  Phone,
  Share2,
  Eye,
  EyeOff,
  ChevronRight,
  ArrowRight,
  Info,
  ShieldCheck,
  AlertOctagon,
  X,
  Minus,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  CalendarCheck,
  Footprints,
  PlaneTakeoff,
  Train,
  Brain,
  Users,
  GitBranch,
  Scissors,
  MoveRight,
  Clock4,
  ArrowLeft,
  Image,
  PieChart,
  AlertCircle,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// ── Semantic icon registry ─────────────────────────────────────────
// Maps ELUZA semantic names → Lucide components.
const ICONS = {
  // Navigation
  'home':              Home,
  'blueprint':         BookOpen,
  'map':               Map,
  'access-locked':     Lock,
  'access-unlocked':   Unlock,
  'arrow-right':       ArrowRight,
  'arrow-left':        ArrowLeft,
  'chevron-right':     ChevronRight,

  // Travel / blueprint logic
  'route':             Compass,
  'calendar':          Calendar,
  'hotel':             Building2,
  'dining':            UtensilsCrossed,
  'transfer':          Car,
  'flight':            PlaneTakeoff,
  'train':             Train,
  'pacing':            Footprints,
  'location':          MapPin,

  // Priority / decision
  'priority':          Star,
  'no-priority':       Minus,
  'decision':          GitBranch,

  // Status / warnings
  'warning':           AlertTriangle,
  'risk':              AlertOctagon,
  'info':              Info,
  'alert':             AlertCircle,
  'check':             CheckCircle2,
  'close':             X,

  // Support / communication
  'message':           MessageCircle,
  'phone':             Phone,
  'share':             Share2,

  // Security
  'shield':            ShieldCheck,

  // Document / deliverable
  'document':          FileText,
  'eye':               Eye,
  'eye-off':           EyeOff,
  'image':             Image,
  'chart':             PieChart,

  // Time / budget
  'clock':             Clock,
  'clock-alt':         Clock4,
  'budget':            DollarSign,
  'trend':             TrendingUp,
  'calendar-check':    CalendarCheck,

  // Misc
  'profile':           Users,
  'brain':             Brain,
  'scissors':          Scissors,
  'move-right':        MoveRight,
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  /** Accessible label. Required when icon communicates meaning. Omit for decorative icons and set aria-hidden instead. */
  'aria-label'?: string;
}

export default function Icon({ name, 'aria-label': ariaLabel, ...props }: IconProps) {
  const LucideIcon = ICONS[name];

  if (!LucideIcon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Icon] Unknown icon name: "${name}"`);
    }
    return null;
  }

  return (
    <LucideIcon
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? 'img' : undefined}
      {...props}
    />
  );
}
