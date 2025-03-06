import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  server: {
    proxy: {
      '/api': 'http://localhost:9000', // Adjust this to match your backend's URL and port
    }},

  plugins: [react()],
})
