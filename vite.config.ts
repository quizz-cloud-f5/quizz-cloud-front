/// <reference types="vitest" />
import path from "path"
import tailwindcss from "@tailwindcss/vite"

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // Enable global context for tests
    environment: "jsdom", // Use jsdom for simulated browser environment
    setupFiles: "./src/setupTests.ts", // Test setup file
  },
})
