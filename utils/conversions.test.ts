import { describe, it, expect } from 'vitest';
import { normalizeToMg, normalizeToMinutes, isValidInput } from './conversions';
import { MassUnit, TimeUnit } from '../types';

describe('conversions.ts', () => {
    describe('normalizeToMg', () => {
        it('should convert grams to milligrams', () => {
            expect(normalizeToMg(1, MassUnit.G)).toBe(1000);
        });

        it('should keep milligrams as milligrams', () => {
            expect(normalizeToMg(500, MassUnit.MG)).toBe(500);
        });

        it('should convert micrograms to milligrams', () => {
            expect(normalizeToMg(1000, MassUnit.MCG)).toBe(1);
        });
    });

    describe('normalizeToMinutes', () => {
        it('should convert hours to minutes', () => {
            expect(normalizeToMinutes(1, TimeUnit.HOUR)).toBe(60);
        });

        it('should keep minutes as minutes', () => {
            expect(normalizeToMinutes(45, TimeUnit.MIN)).toBe(45);
        });
    });

    describe('isValidInput', () => {
        it('should return true for positive numbers', () => {
            expect(isValidInput(10)).toBe(true);
            expect(isValidInput(0.5)).toBe(true);
        });

        it('should return false for NaN, zero or negative numbers', () => {
            expect(isValidInput(0)).toBe(false);
            expect(isValidInput(-1)).toBe(false);
            expect(isValidInput(NaN)).toBe(false);
            expect(isValidInput(Infinity)).toBe(false);
        });
    });
});
