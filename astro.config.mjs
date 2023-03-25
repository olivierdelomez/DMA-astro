import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: { port: 3333, host: true},
  vite: {
    ssr: {
      noExternal: ['@justinribeiro/lite-youtube']
    }
  },
  experimental: {
    assets: true
   },
   
});
