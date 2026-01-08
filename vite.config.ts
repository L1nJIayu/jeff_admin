import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/src/api',
      '@utils': '/src/utils',
      '@components': '/src/components',
      '@views': '/src/views',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
      "@constants": '/src/constants',
      '@routes': '/src/router',
      '@store': '/src/store',
    }
  },
  server: {
    port: 11188,
    proxy: {
      '/cickpx': {
        target: 'http://ubattery.cn:24001',
        // rewrite: (path) => path.replace(/\/cickpx/, '')
      },
      '/cickp_backend': {
        target: 'http://ubattery.cn:24001',
        // rewrite: (path) => path.replace(/\/cickp_backend/, '')
      }
    }
  }
})
