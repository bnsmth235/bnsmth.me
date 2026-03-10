import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'bnsmth.me/public',
  plugins: [react(), tailwindcss()],
})
