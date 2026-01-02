import React, { useState, useEffect } from 'react';
import { InputGroup } from '../ui/InputGroup';
import { TimeUnit } from '../../types';
import { normalizeToMinutes, isValidInput } from '../../utils/conversions';
import { Droplets } from 'lucide-react';

export const DripCalculator: React.FC = () => {
  const [totalVolume, setTotalVolume] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [timeUnit, setTimeUnit] = useState<TimeUnit>(TimeUnit.HOUR);
  const [dropFactor, setDropFactor] = useState<'20' | '60'>('20'); // 20 = Macrogotas, 60 = Microgotas

  const [dropsPerMin, setDropsPerMin] = useState<number | null>(null);

  useEffect(() => {
    const vol = parseFloat(totalVolume);
    const time = parseFloat(timeValue);

    if (isValidInput(vol) && isValidInput(time)) {
      const minutes = normalizeToMinutes(time, timeUnit);
      
      // Formula: (Volume * Factor) / TimeInMinutes
      const factor = parseInt(dropFactor);
      const rate = (vol * factor) / minutes;
      
      setDropsPerMin(rate);
    } else {
      setDropsPerMin(null);
    }
  }, [totalVolume, timeValue, timeUnit, dropFactor]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Droplets className="w-5 h-5 text-medical-600" />
          Dados da Infusão
        </h3>
        
        <InputGroup
          label="Volume Total da Infusão"
          value={totalVolume}
          onChange={setTotalVolume}
          unit="ml"
          placeholder="Ex: 500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputGroup
            label="Tempo de Infusão"
            value={timeValue}
            onChange={setTimeValue}
            unitOptions={Object.values(TimeUnit)}
            selectedUnit={timeUnit}
            onUnitChange={(u) => setTimeUnit(u as TimeUnit)}
            placeholder="Ex: 8"
          />
          
          <div className="mb-4">
             <label className="block text-sm font-medium text-slate-700 mb-1">
              Tipo de Equipo
            </label>
            <div className="flex rounded-md shadow-sm">
              <select
                value={dropFactor}
                onChange={(e) => setDropFactor(e.target.value as '20' | '60')}
                className="block w-full rounded-md border-slate-300 shadow-sm focus:border-medical-500 focus:ring-medical-500 sm:text-sm p-3 border bg-white text-slate-900"
              >
                <option value="20">Macrogotas (20 gts/ml)</option>
                <option value="60">Microgotas (60 mgts/ml)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {dropsPerMin !== null && (
        <div className="bg-medical-50 border border-medical-100 p-6 rounded-xl">
          <p className="text-sm text-medical-700 font-medium uppercase tracking-wide">Velocidade de Infusão</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-medical-900">{Math.round(dropsPerMin)}</span>
            <span className="text-xl text-medical-700 font-semibold">
              {dropFactor === '20' ? 'gotas' : 'microgotas'}/min
            </span>
          </div>
          <p className="mt-2 text-sm text-medical-600">
            O resultado é arredondado para o número inteiro mais próximo para viabilidade prática.
            Valor exato: {dropsPerMin.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};