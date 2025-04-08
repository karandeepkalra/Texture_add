// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'three/addons': 'three/examples/jsm', // Fallback for older paths
    },
  },
  optimizeDeps: {
    include: ['three', 'three/addons/exporters/GLTFExporter'],
  },
});