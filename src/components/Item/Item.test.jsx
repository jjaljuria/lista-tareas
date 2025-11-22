import { describe, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item';
import store from '../store/store';

vi.mock('../store/store', () => ({
    default: {
        dispatch: vi.fn(),
    }
}));

describe('Item Component', () => {
    const mockDatosItem = {
        id: 1,
        nombre: 'Tarea de prueba',
        descripcion: 'Descripción de prueba',
        fecha: '2025-11-21',
    };

    test('should renders the item with data correctly', () => {
        render(<Item datos={mockDatosItem} />);

        expect(screen.getByText('Tarea de prueba')).toBeTruthy();
        expect(screen.getByText('Descripción de prueba')).toBeTruthy();
        expect(screen.getByText('2025-11-21')).toBeTruthy();
    });

    test('should dispatches the ELIMINAR action when the delete button is clicked', () => {
        render(<Item datos={mockDatosItem} />);

        const deleteButton = screen.getByRole('button', { name: /eliminar/i });
        fireEvent.click(deleteButton);

        expect(store.dispatch).toHaveBeenCalledWith({
            type: 'ELIMINAR',
            id: 1,
        });
    });

    test.skip('should not dispatch if id is null', () => {
        const mockDatosItemWithoutId = {
            ...mockDatosItem,
            id: null,
        };

        render(<Item datosItem={mockDatosItemWithoutId} />);

        const deleteButton = screen.getByRole('button', { name: /eliminar/i });
        fireEvent.click(deleteButton);

        expect(store.dispatch).not.toHaveBeenCalled();
    });
});