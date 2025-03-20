import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()],
  base: '/',
});
