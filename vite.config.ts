import react from '@vitejs/plugin-react'
import path from 'path'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const buildPath = 'build'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, buildPath),
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      common: `${path.resolve(__dirname, './src/common/')}`,
      constants: `${path.resolve(__dirname, './src/constants/')}`,
      sections: `${path.resolve(__dirname, './src/sections/')}`,
      styles: `${path.resolve(__dirname, './src/styles/')}`,
    },
  },
})
