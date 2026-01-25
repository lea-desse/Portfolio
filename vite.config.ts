import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '';

  return {
    plugins: [react()],
    base: '/Portfolio/',
    // On utilise la méthode officielle de Vite pour exposer des variables
    define: {
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(apiKey),
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(apiKey)
    }
  };
});