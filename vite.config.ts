import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS()
  ],
  server: {
    port: 11188,
    proxy: {
      '/dev': {
        target: 'http://ubattery.cn:24001',
        rewrite: (path) => path.replace(/\/dev/, '/cickpx')
      }
    }
  }
})
