import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tsConfigPaths({ loose: true })],
})
