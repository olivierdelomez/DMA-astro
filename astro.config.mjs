import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://defensedesmilieuxaquatiques.org',
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
