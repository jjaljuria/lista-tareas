import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'happy-dom', // or 'node'
        globals: true, // para usar funciones como 'expect' globalmente sin importar
    },
})
