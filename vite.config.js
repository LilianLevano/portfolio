import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Static site: Vite's default `dist/` output is used for Netlify.
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'node',
    include: ['tests/**/*.test.js'],
  },
})
