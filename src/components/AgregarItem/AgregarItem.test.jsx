import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AgregarItem from './AgregarItem';
import moment from 'moment';
import { v7 as uuidv7 } from 'uuid';

// Mock del store de Redux
vi.mock('../store/store', () => ({
    default: {
        dispatch: vi.fn(),
        getState: vi.fn(() => ({ TODOS: [] })),
        subscribe: vi.fn(() => vi.fn()),
    },
}));

// Mock de uuid
vi.mock('uuid', () => ({
    v7: vi.fn(),
}));

import store from '../store/store';
// Mock de moment para controlar la fecha actual
vi.mock('moment', () => ({
    default: vi.fn(() => ({
        format: vi.fn((formatStr) => {
            if (formatStr === 'YYYY-MM-DD') {
                return '2025-11-19'; // Fecha fija para pruebas
            }
            return '2025-11-19';
        }),
    })),
}));

describe('AgregarItem component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.stubGlobal('alert', vi.fn());
        uuidv7.mockReturnValue('mock-uuid-123'); // Establecer el valor mockeado para uuidv4
    });

    test('should render input fields and "Agregar Tarea" button', () => {
        render(<AgregarItem />);

        const nombreInput = screen.getByPlaceholderText('Nombre');
        const descripcionInput = screen.getByPlaceholderText('Descripcion');
        const fechaInput = screen.getByPlaceholderText('Fecha');
        const addButton = screen.getByText('Agregar Tarea');

        expect(nombreInput).toBeTruthy();
        expect(descripcionInput).toBeTruthy();
        expect(fechaInput).toBeTruthy();
        expect(addButton).toBeTruthy();
    });

    test('should dispatch AGREGAR action on form submission with valid data', () => {

        render(<AgregarItem />);

        const nombreInput = screen.getByPlaceholderText('Nombre');
        const descripcionInput = screen.getByPlaceholderText('Descripcion');
        const formElement = screen.getByRole('form')

        fireEvent.change(nombreInput, { target: { value: 'Nueva Tarea' } });
        fireEvent.change(descripcionInput, { target: { value: 'Descripción de la tarea' } });
        fireEvent.submit(formElement)

        expect(store.dispatch).toHaveBeenCalledOnce();
        expect(store.dispatch).toHaveBeenCalledWith({
            type: 'AGREGAR',
            id: 'mock-uuid-123', // Ahora esperamos el UUID mockeado
            nombre: 'Nueva Tarea',
            descripcion: 'Descripción de la tarea',
            fecha: '2025-11-19', // Fecha mockeada
        });

        // Verificar que los campos se resetean después del envío
        expect(nombreInput.value).toBe('');
        expect(descripcionInput.value).toBe('');
    });

    test('should not allow selecting a past date', () => {
        const alertMock = vi.spyOn(window, 'alert')
        render(<AgregarItem />);
        const fechaInput = screen.getByPlaceholderText('Fecha');

        // Simular un intento de establecer una fecha pasada
        fireEvent.change(fechaInput, { target: { value: '2025-11-18' } });

        // Verificar que la fecha se revierte a la fecha actual mockeada
        expect(fechaInput.value).toBe('2025-11-19');
        // Verifica si se muestra el alert
        expect(alertMock).toHaveBeenCalledOnce()

    });
});
