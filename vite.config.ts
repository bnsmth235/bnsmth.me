import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'bnsmth.me/public',
  build: {
    outDir: 'bnsmth.me/dist',
  },
  plugins: [react(), tailwindcss()],
})
