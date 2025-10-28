// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/kickstarter/',   // ⬅️ important : avec slash au début ET à la fin
  build: { outDir: 'dist' }
})
