import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    base: '/kickstarter/',
    build: { outDir: 'dist' }
})
