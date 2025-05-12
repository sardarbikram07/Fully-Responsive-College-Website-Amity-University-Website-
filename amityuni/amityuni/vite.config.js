import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['3d17-2a09-bac1-36e0-00-1c5-6e.ngrok-free.app']
  }
})
//ngrok http localhost address
