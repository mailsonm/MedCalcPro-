import React from 'react';

interface InputGroupProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  unit?: string;
  unitOptions?: string[];
  selectedUnit?: string;
  onUnitChange?: (unit: any) => void;
  helpText?: string;
  error?: boolean;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  label,
  value,
  onChange,
  placeholder,
  unit,
  unitOptions,
  selectedUnit,
  onUnitChange,
  helpText,
  error
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <div className="flex rounded-md shadow-sm">
        <input
          type="number"
          min="0"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`flex-1 block w-full rounded-l-md border-slate-300 focus:ring-medical-500 focus:border-medical-500 min-w-0 sm:text-sm p-3 border ${error ? 'border-red-300 bg-red-50' : ''}`}
          placeholder={placeholder}
        />
        
        {unitOptions && onUnitChange ? (
          <select
            value={selectedUnit}
            onChange={(e) => onUnitChange(e.target.value)}
            className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-slate-300 bg-slate-50 text-slate-500 sm:text-sm focus:ring-medical-500 focus:border-medical-500"
          >
            {unitOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-slate-300 bg-slate-50 text-slate-500 sm:text-sm">
            {unit || ''}
          </span>
        )}
      </div>
      {helpText && <p className="mt-1 text-xs text-slate-500">{helpText}</p>}
    </div>
  );
};