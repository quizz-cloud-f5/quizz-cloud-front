/// <reference types="vitest" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Habilita describe, test, it, expect sin importar
    environment: "jsdom", // Usa jsdom para simular el navegador
    setupFiles: "./src/setupTests.ts", // Archivo para configuraciones globales
  },
})
