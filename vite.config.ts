import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig(({mode}) => {
  // Load biến môi trường tương ứng với `mode`
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      allowedHosts: [env.VITE_MEZON_SERVER],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
