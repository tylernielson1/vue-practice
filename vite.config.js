import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ex1: resolve(__dirname, 'gs-01-starting-project/index.html'),
        ex2: resolve(__dirname, 'gs-02-rebuild-with-vue/index.html'),
      },
    },
  },
})
