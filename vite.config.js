import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects',
          dest: '',
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist', // Ensure this matches the 'publish' directory in netlify.toml
  },
});
