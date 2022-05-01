import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const isDev = mode === 'development'
  return {
    // build specific config
    base: isDev ? "" : "/protofish-front/",
    plugins: [
      vue(),
      VitePWA({
        mode: "development",
        base: isDev ? "" : "/protofish-front/",
        srcDir: "src",
        filename: "service-worker.ts",
        includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        strategies: "injectManifest",
        manifest: {
          name: 'Protofish',
          short_name: 'Protofish',
          description: 'Frontend app for Protofish',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            }
          ]
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
