import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Optimize for static site generation
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate static HTML files
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Public assets directory
  publicDir: 'public',
})

