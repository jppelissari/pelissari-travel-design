import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PrivacyModeToggleProps {
  isPrivateMode: boolean;
  onToggle: () => void;
}

export default function PrivacyModeToggle({ isPrivateMode, onToggle }: PrivacyModeToggleProps) {
  return (
    <div className="bg-cool-gray-50 border border-cool-gray-200 rounded-custom p-4 md:p-5 mb-8 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-cool-gray-200 text-primary shrink-0">
          {isPrivateMode ? <EyeOff size={16} /> : <Eye size={16} />}
        </div>
        <div>
          <h4 className="font-sans text-sm font-bold text-primary">
            Modo Privativo {isPrivateMode ? 'Ativo' : 'Inativo'}
          </h4>
          <p className="text-xs text-cool-gray-500 max-w-sm mt-0.5 leading-relaxed">
            {isPrivateMode
              ? 'Nomes, códigos, referências financeiras e contatos estão ocultos.'
              : 'Todos os campos sensíveis estão visíveis. Não compartilhar esta tela.'}
          </p>
        </div>
      </div>

      <button
        onClick={onToggle}
        aria-label="Alternar Modo Privativo"
        aria-pressed={isPrivateMode}
        className={`w-13 h-7 rounded-full transition-colors relative outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0 ${
          isPrivateMode ? 'bg-primary' : 'bg-cool-gray-300'
        }`}
      >
        <span
          className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-all ${
            isPrivateMode ? 'right-0.5' : 'left-0.5'
          }`}
        />
      </button>
    </div>
  );
}
