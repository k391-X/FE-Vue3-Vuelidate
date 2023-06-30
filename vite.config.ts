import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@vuelidate/core': '/node_modules/@vuelidate/core',
      '@vuelidate/validator': '/node_modules/@vuelidate/validator',
    }
  }
})
