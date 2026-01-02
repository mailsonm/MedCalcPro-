export enum MassUnit {
  G = 'g',
  MG = 'mg',
  MCG = 'mcg'
}

export enum VolumeUnit {
  ML = 'ml',
  L = 'l'
}

export enum TimeUnit {
  MIN = 'min',
  HOUR = 'h'
}

export enum CalculatorType {
  DOSAGE = 'dosage',
  DRIP = 'drip',
  DILUTION = 'dilution'
}

export interface CalculationResult {
  value: number;
  unit: string;
  details?: string;
  error?: string;
}