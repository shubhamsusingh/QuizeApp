import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/QuizeApp/',  // Corrected path for GitHub Pages (must have a leading slash)
  plugins: [react()],
});
