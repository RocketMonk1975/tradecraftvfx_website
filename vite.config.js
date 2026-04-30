import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
//
// Base path comes from VITE_BASE_URL (see .env, .env.production).
// No hardcoded fallback per environment -- if the env file is missing,
// we fall back to "/" which is correct for dev and for any root-domain deploy.
//
// To target a different host:
//   - GitHub Pages subpath: VITE_BASE_URL=/tradecraftvfx_website/  (in .env.production)
//   - Custom domain at root: VITE_BASE_URL=/                       (in .env.production)
//   - ISP / other host:      set VITE_BASE_URL accordingly
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base: env.VITE_BASE_URL || '/'
  }
})
