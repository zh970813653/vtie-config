import { defineConfig } from 'vite';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: ['windicss', 'node_modules']
    })
  ]
});
