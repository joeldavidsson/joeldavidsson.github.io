import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  return defineConfig({
    plugins: [react(), eslint()],
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
  });
};
