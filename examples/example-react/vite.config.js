import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'lottie-colorify': resolve(__dirname, '../../lib/index.mjs'),
    },
  },
});
