import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This site is published as a GitHub Pages *project* site at:
//   https://kellwell.github.io/family-meal-plan/
// so `base` is pinned to the repo path. Every built asset URL will then start
// with /family-meal-plan/, which is exactly what that address needs to load
// correctly. If the repo is ever renamed, update this string to match.
export default defineConfig({
  plugins: [react()],
  base: '/family-meal-plan/',
})
