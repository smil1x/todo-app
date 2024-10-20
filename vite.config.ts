import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  root: 'src',
  base: '/todo-app/',
  build: {
    outDir: '../dist', // выходная директория для сборки
    emptyOutDir: true,
  },
  plugins: [
    react(),
    sassDts({
      enabledMode: ['development', 'production'],
    })
  ],
});