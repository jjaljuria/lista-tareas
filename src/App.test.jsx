import { describe, test, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import App from './App'

describe('App component', () => {

    beforeEach(() => render(<App />))
    afterAll(() => cleanup())

    test('should App rendered', () => {
        screen.getByText('Lista de Tareas')
    })

    test('should render the "Add Task" button', () => {
        screen.getByText('Agregar Tarea');
    });

    test('should render the "Name" input field', () => {
        screen.getByPlaceholderText('Nombre');
    });
})
