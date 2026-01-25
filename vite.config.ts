import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement (y compris celles du shell de GitHub)
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    base: '/Portfolio/',
    define: {
      // Force l'injection de la clé API pour être sûr qu'elle soit présente dans le build
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY),
    },
  };
});