import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    allowedHosts: ['e800-14-176-232-186.ngrok-free.app'],
  },
});
