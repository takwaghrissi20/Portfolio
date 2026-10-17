import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at /Portfolio/. Change to '/' for a root domain (Vercel, Netlify, custom domain).
export default defineConfig({ base: '/Portfolio/', plugins: [react()] })
