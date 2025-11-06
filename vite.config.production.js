import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production config for Namecheap / custom domain
export default defineConfig({
  plugins: [react()],
  base: '/', // Root domain (not subdirectory)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Don't generate sourcemaps in production
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          i18n: ['react-i18next', 'i18next'],
        }
      }
    }
  }
})

