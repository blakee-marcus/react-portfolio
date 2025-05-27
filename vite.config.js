import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sitemapPlugin from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://blakemarcus.com',
      routes: ['/', '/about', '/portfolio', '/hire', '/contact', '/landing-pages'],
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
  },
});
