import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="mt-12 border-t border-slate-200 pt-6 bg-slate-50 p-6 rounded-lg">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Aviso Legal Importante</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Este software é uma ferramenta de apoio educacional e auxiliar. 
            <strong> Os resultados não substituem o julgamento clínico profissional.</strong> 
            Sempre revise os cálculos manualmente e confirme as dosagens conforme protocolos institucionais antes da administração de qualquer medicamento. 
            Os desenvolvedores não se responsabilizam por erros decorrentes do uso desta aplicação.
          </p>
        </div>
      </div>
    </div>
  );
};