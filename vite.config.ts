import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge toutes les variables d'environnement
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  
  console.log('--- Build Info ---');
  console.log('Mode:', mode);
  console.log('API Key detected (length):', apiKey ? apiKey.length : 'NOT FOUND');
  console.log('------------------');

  return {
    plugins: [react()],
    base: '/Portfolio/',
    define: {
      // On utilise un nom personnalisé qui ne sera pas touché par Vite
      '__APP_GEMINI_API_KEY__': JSON.stringify(apiKey),
    },
  };
});
