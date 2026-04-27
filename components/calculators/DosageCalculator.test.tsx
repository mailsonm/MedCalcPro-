import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DosageCalculator } from './DosageCalculator';
import React from 'react';

describe('DosageCalculator', () => {
    it('should calculate the correct volume for Rule of Three', () => {
        render(<DosageCalculator />);

        const availableDose = screen.getByLabelText(/Concentração Disponível/i);
        const availableVol = screen.getByLabelText(/Volume Disponível/i);
        const desiredDose = screen.getByLabelText(/Dose Prescrita/i);

        fireEvent.change(availableDose, { target: { value: '500' } });
        fireEvent.change(availableVol, { target: { value: '5' } });
        fireEvent.change(desiredDose, { target: { value: '250' } });

        expect(screen.getByText(/2,5/)).toBeDefined();
        expect(screen.getByText(/Volume a Aspirar/i)).toBeDefined();
    });
});
