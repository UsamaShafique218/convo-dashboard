import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  server: {
    proxy: {
      "/api": {
        target: "https://convo.arinovation.com", // backend API base URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

 
