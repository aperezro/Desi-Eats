import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/Desi-Eats/',  // GitHub Pages base URL
  plugins: [ tailwindcss(),react()],
})
