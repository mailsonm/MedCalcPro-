import React, { useState, useEffect } from 'react';
import { InputGroup } from '../ui/InputGroup';
import { isValidInput } from '../../utils/conversions';
import { Beaker } from 'lucide-react';

export const DilutionCalculator: React.FC = () => {
  // C1 * V1 = C2 * V2
  // Usually calculating V1 (How much stock solution needed)
  
  const [c1, setC1] = useState(''); // Stock Concentration
  const [c2, setC2] = useState(''); // Desired Concentration
  const [v2, setV2] = useState(''); // Desired Total Volume
  
  const [v1, setV1] = useState<number | null>(null);
  const [solventVolume, setSolventVolume] = useState<number | null>(null);

  useEffect(() => {
    const concStock = parseFloat(c1);
    const concDesired = parseFloat(c2);
    const volTotal = parseFloat(v2);

    if (isValidInput(concStock) && isValidInput(concDesired) && isValidInput(volTotal)) {
      if (concDesired > concStock) {
        // Error: Cannot concentrate a dilute solution by just taking volume
        setV1(null);
        return;
      }

      // V1 = (C2 * V2) / C1
      const volNeeded = (concDesired * volTotal) / concStock;
      setV1(volNeeded);
      setSolventVolume(volTotal - volNeeded);
    } else {
      setV1(null);
    }
  }, [c1, c2, v2]);

  return (
    <div className="space-y-6">
       <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Fórmula utilizada: <strong>C1 · V1 = C2 · V2</strong>. 
              Calcula quanto de solução estoque (V1) é necessário para preparar um volume desejado (V2) com concentração específica (C2).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Beaker className="w-5 h-5 text-medical-600" />
          Parâmetros da Solução
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputGroup
            label="C1 - Concentração Estoque (Disponível)"
            value={c1}
            onChange={setC1}
            unit="mg/ml ou %"
            placeholder="Ex: 50"
          />
          <InputGroup
            label="C2 - Concentração Desejada"
            value={c2}
            onChange={setC2}
            unit="mg/ml ou %"
            placeholder="Ex: 10"
            error={parseFloat(c2) > parseFloat(c1)}
            helpText={parseFloat(c2) > parseFloat(c1) ? "A concentração desejada não pode ser maior que a estoque." : ""}
          />
        </div>

        <InputGroup
            label="V2 - Volume Final Desejado"
            value={v2}
            onChange={setV2}
            unit="ml"
            placeholder="Ex: 100"
          />
      </div>

      {v1 !== null && solventVolume !== null && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
           <div className="bg-medical-50 border border-medical-100 p-6 rounded-xl">
            <p className="text-sm text-medical-700 font-medium uppercase tracking-wide">V1 - Volume do Soluto</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-medical-900">{v1.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span>
              <span className="text-lg text-medical-700 font-semibold">ml</span>
            </div>
            <p className="mt-2 text-sm text-medical-600">
              Retirar da solução estoque.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
            <p className="text-sm text-slate-600 font-medium uppercase tracking-wide">Volume de Diluente</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-800">{solventVolume.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span>
              <span className="text-lg text-slate-600 font-semibold">ml</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Adicionar para completar {v2}ml.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};