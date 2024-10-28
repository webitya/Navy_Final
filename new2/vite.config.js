import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://navy-final.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  middleware: () => {
    return createProxyMiddleware('/api', {
      target: 'https://navy-final.onrender.com',
      changeOrigin: true,
      secure: false,
});
},
});