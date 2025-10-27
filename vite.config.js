import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',           // par défaut sur un domaine dédié
  build: { outDir: 'dist' }
})