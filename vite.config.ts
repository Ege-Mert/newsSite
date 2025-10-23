import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use base path only when building for GitHub Pages
  const base = mode === 'production' && process.env.GITHUB_ACTIONS ? '/newsSite/' : '/';
  
  return {
    plugins: [react()],
    base: base,
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
