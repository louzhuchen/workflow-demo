import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/workflow-demo/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(), ElementPlus({})],
})
