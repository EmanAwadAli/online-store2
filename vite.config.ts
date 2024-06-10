import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mongezVite from '@mongez/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ mongezVite(), react()],
  envPrefix: "APP_"
})
