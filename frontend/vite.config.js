import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts')) return 'vendor-charts'
            if (id.includes('framer-motion')) return 'vendor-motion'
            if (id.includes('lucide-react')) return 'vendor-icons'
            if (id.includes('react-router-dom') || id.includes('react-dom')) return 'vendor-react'
          }
        },
      },
    },
  },
})
