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
        ex3: resolve(__dirname, 'basics-01-starting-project/index.html'),
        assign1: resolve(__dirname, 'basics-assignment-1-problem/index.html'),
        ex4: resolve(__dirname, 'basics-03-events-starting-code/index.html'),
        assign2: resolve(__dirname, 'basics-assignment-2-problem/index.html'),
        ex5: resolve(__dirname, 'basics-05-using-the-native-event-object/index.html'),
        assign3: resolve(__dirname, 'basics-assignment-3-problem/index.html'),
        ex6: resolve(__dirname, 'basics-10-styling-starting-setup/index.html'),
        assign4: resolve(__dirname, 'basics-assignment-4-problem/index.html'),
      },
    },
  },
})
