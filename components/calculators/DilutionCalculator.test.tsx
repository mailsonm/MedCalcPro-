import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DilutionCalculator } from './DilutionCalculator';
import React from 'react';

describe('DilutionCalculator', () => {
    it('should calculate correct V1 for dilution', () => {
        render(<DilutionCalculator />);

        // C1: 50mg/ml, C2: 10mg/ml, V2: 100ml -> V1 = 10 * 100 / 50 = 20ml
        const c1 = screen.getByLabelText(/C1 - Concentração Estoque/i);
        const c2 = screen.getByLabelText(/C2 - Concentração Desejada/i);
        const v2 = screen.getByLabelText(/V2 - Volume Final Desejado/i);

        fireEvent.change(c1, { target: { value: '50' } });
        fireEvent.change(c2, { target: { value: '10' } });
        fireEvent.change(v2, { target: { value: '100' } });

        expect(screen.getByText('20')).toBeDefined();
        expect(screen.getByText(/V1 - Volume do Soluto/i)).toBeDefined();
        expect(screen.getByText('80')).toBeDefined(); // Solvent
    });
});
