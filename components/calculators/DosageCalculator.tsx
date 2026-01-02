import React, { useState, useEffect } from 'react';
import { InputGroup } from '../ui/InputGroup';
import { MassUnit } from '../../types';
import { normalizeToMg, isValidInput } from '../../utils/conversions';
import { Calculator } from 'lucide-react';

export const DosageCalculator: React.FC = () => {
  const [availableDose, setAvailableDose] = useState('');
  const [availableDoseUnit, setAvailableDoseUnit] = useState<MassUnit>(MassUnit.MG);
  
  const [availableVol, setAvailableVol] = useState('');
  
  const [desiredDose, setDesiredDose] = useState('');
  const [desiredDoseUnit, setDesiredDoseUnit] = useState<MassUnit>(MassUnit.MG);

  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const doseAvail = parseFloat(availableDose);
    const volAvail = parseFloat(availableVol);
    const doseDesire = parseFloat(desiredDose);

    if (isValidInput(doseAvail) && isValidInput(volAvail) && isValidInput(doseDesire)) {
      const normDoseAvail = normalizeToMg(doseAvail, availableDoseUnit);
      const normDoseDesire = normalizeToMg(doseDesire, desiredDoseUnit);

      // Rule of three: (Desired * VolAvailable) / Available
      const calculatedVolume = (normDoseDesire * volAvail) / normDoseAvail;
      setResult(calculatedVolume);
    } else {
      setResult(null);
    }
  }, [availableDose, availableDoseUnit, availableVol, desiredDose, desiredDoseUnit]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-medical-600" />
          Apresentação do Frasco (Disponível)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputGroup
            label="Concentração Disponível"
            value={availableDose}
            onChange={setAvailableDose}
            unitOptions={Object.values(MassUnit)}
            selectedUnit={availableDoseUnit}
            onUnitChange={(u) => setAvailableDoseUnit(u as MassUnit)}
            placeholder="Ex: 500"
          />
          <InputGroup
            label="Volume Disponível"
            value={availableVol}
            onChange={setAvailableVol}
            unit="ml"
            placeholder="Ex: 5"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Prescrição Médica</h3>
        <InputGroup
          label="Dose Prescrita (Desejada)"
          value={desiredDose}
          onChange={setDesiredDose}
          unitOptions={Object.values(MassUnit)}
          selectedUnit={desiredDoseUnit}
          onUnitChange={(u) => setDesiredDoseUnit(u as MassUnit)}
          placeholder="Ex: 200"
          helpText="O sistema converte as unidades automaticamente."
        />
      </div>

      {result !== null && (
        <div className="bg-medical-50 border border-medical-100 p-6 rounded-xl animate-fade-in">
          <p className="text-sm text-medical-700 font-medium uppercase tracking-wide">Volume a Aspirar</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-medical-900">{result.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span>
            <span className="text-xl text-medical-700 font-semibold">ml</span>
          </div>
          <p className="mt-2 text-sm text-medical-600">
            Para administrar <strong>{desiredDose}{desiredDoseUnit}</strong> usando uma solução de {availableDose}{availableDoseUnit}/{availableVol}ml.
          </p>
        </div>
      )}
    </div>
  );
};