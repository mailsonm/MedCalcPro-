import React, { useState } from 'react';
import { CalculatorType } from './types';
import { DosageCalculator } from './components/calculators/DosageCalculator';
import { DripCalculator } from './components/calculators/DripCalculator';
import { DilutionCalculator } from './components/calculators/DilutionCalculator';
import { Disclaimer } from './components/Disclaimer';
import { Activity, Syringe, Droplets, Beaker } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CalculatorType>(CalculatorType.DOSAGE);

  const renderCalculator = () => {
    switch (activeTab) {
      case CalculatorType.DOSAGE:
        return <DosageCalculator />;
      case CalculatorType.DRIP:
        return <DripCalculator />;
      case CalculatorType.DILUTION:
        return <DilutionCalculator />;
      default:
        return <DosageCalculator />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-10">
      {/* Header */}
      <header className="bg-medical-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">MedCalc Pro</h1>
              <p className="text-xs text-medical-100 opacity-90">Ferramenta de Precisão Clínica</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        
        {/* Tab Navigation */}
        <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-200 mb-8 flex overflow-x-auto">
          <button
            onClick={() => setActiveTab(CalculatorType.DOSAGE)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === CalculatorType.DOSAGE
                ? 'bg-medical-50 text-medical-700 shadow-sm border border-medical-100'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
            }`}
          >
            <Syringe className="w-4 h-4" />
            Regra de Três
          </button>
          <button
            onClick={() => setActiveTab(CalculatorType.DRIP)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === CalculatorType.DRIP
                ? 'bg-medical-50 text-medical-700 shadow-sm border border-medical-100'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
            }`}
          >
            <Droplets className="w-4 h-4" />
            Gotejamento
          </button>
          <button
            onClick={() => setActiveTab(CalculatorType.DILUTION)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeTab === CalculatorType.DILUTION
                ? 'bg-medical-50 text-medical-700 shadow-sm border border-medical-100'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
            }`}
          >
            <Beaker className="w-4 h-4" />
            Diluição
          </button>
        </div>

        {/* Active Calculator Component */}
        <div className="animate-fade-in">
          {renderCalculator()}
        </div>

        {/* Footer / Disclaimer */}
        <Disclaimer />
      </main>
    </div>
  );
};

export default App;