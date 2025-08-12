import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for GitHub Pages under /marc-olivier-tessier-site/
export default defineConfig({
  plugins: [react()],
  base: '/marc-olivier-tessier-site/', // 👈 must match the repo name exactly
  optimizeDeps: { exclude: ['lucide-react'] }, // keep your current exclude
})
