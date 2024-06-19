import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG','**/*.glb'],
  // base: "/giant-clam/",
  base: "/giant-clam/",
  publicDir:"assets"
})
