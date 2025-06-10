import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['b467-14-176-232-186.ngrok-free.app'], // Allow all hosts (e.g., ngrok subdomains)
  },
})
