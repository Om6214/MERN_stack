import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-bootstrap']
  },
  build: {
    rollupOptions: {
      external: ['react-bootstrap']
    }
  },
  "routes":{
    "src":"/(.*)",
    "dest":"src main.jsx",
    "method":["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    "headers":{
      "Access-Control-Allow-Origin":"*"
    }
  }
});
