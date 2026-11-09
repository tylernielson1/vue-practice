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
        ex1: resolve(__dirname, 'modules/getting-started/gs-01-starting-project/index.html'),
        ex2: resolve(__dirname, 'modules/getting-started/gs-02-rebuild-with-vue/index.html'),
        ex3: resolve(__dirname, 'modules/basics/basics-01-starting-project/index.html'),
        assign1: resolve(__dirname, 'modules/basics/basics-assignment-1-problem/index.html'),
        ex4: resolve(__dirname, 'modules/basics/basics-03-events-starting-code/index.html'),
        assign2: resolve(__dirname, 'modules/basics/basics-assignment-2-problem/index.html'),
        ex5: resolve(__dirname, 'modules/basics/basics-05-using-the-native-event-object/index.html'),
        assign3: resolve(__dirname, 'modules/basics/basics-assignment-3-problem/index.html'),
        ex6: resolve(__dirname, 'modules/basics/basics-10-styling-starting-setup/index.html'),
        assign4: resolve(__dirname, 'modules/basics/basics-assignment-4-problem/index.html'),
        ex7: resolve(__dirname, 'modules/lists/lists-cond-01-starting-setup/index.html'),
        assign5: resolve(__dirname, 'modules/lists/lists-cond-assignment-problem/index.html'),
        project1: resolve(__dirname, 'projects/prj-monster-01-starting-setup/index.html'),
        ex8: resolve(__dirname, 'modules/behind-the-scenes/behind-scenes-01-starting-setup/index.html'),
        ex9: resolve(__dirname, 'modules/components-intro/cmp-intro-01-starting-setup/index.html'),
        ex10: resolve(__dirname, 'modules/component-communication/cmp-communication-01-starting-setup/index.html'),
        assign6: resolve(__dirname, 'modules/component-communication/cmp-communication-assignment-problem/index.html'),
        ex11: resolve(__dirname, 'modules/component-communication/cmp-communication-08-a-potential-problem-starting-setup/index.html')
      },
    },
  },
})
