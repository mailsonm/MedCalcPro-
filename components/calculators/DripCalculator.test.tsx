import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DripCalculator } from './DripCalculator';
import React from 'react';

describe('DripCalculator', () => {
    it('should calculate correct drip rate for macro-drops', () => {
        render(<DripCalculator />);

        const volume = screen.getByLabelText(/Volume Total/i);
        const time = screen.getByLabelText(/Tempo de Infusão/i);

        fireEvent.change(volume, { target: { value: '500' } });
        fireEvent.change(time, { target: { value: '8' } });

        // 500 * 20 / (8 * 60) = 10000 / 480 = 20.83 -> Round to 21
        expect(screen.getByText('21')).toBeDefined();
        expect(screen.getByText(/Velocidade de Infusão/i)).toBeDefined();
    });
});
