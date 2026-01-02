import { MassUnit, TimeUnit } from '../types';

/**
 * Converts any mass unit to Milligrams (mg) for base calculation.
 */
export const normalizeToMg = (value: number, unit: MassUnit): number => {
  switch (unit) {
    case MassUnit.G:
      return value * 1000;
    case MassUnit.MG:
      return value;
    case MassUnit.MCG:
      return value / 1000;
    default:
      return value;
  }
};

/**
 * Converts any time unit to Minutes for base calculation.
 */
export const normalizeToMinutes = (value: number, unit: TimeUnit): number => {
  switch (unit) {
    case TimeUnit.HOUR:
      return value * 60;
    case TimeUnit.MIN:
      return value;
    default:
      return value;
  }
};

/**
 * Validates if input is a safe positive number.
 */
export const isValidInput = (val: number): boolean => {
  return !isNaN(val) && val > 0 && isFinite(val);
};