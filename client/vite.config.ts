import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/lgevers/",
  plugins: [
    TanStackRouterVite({target: "react", autoCodeSplitting: true, apiBase: "lgevers"}),
    tailwindcss(),
    react()
  ],
})
