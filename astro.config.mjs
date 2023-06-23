import { defineConfig } from 'astro/config';

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: 'https://defensedesmilieuxaquatiques.org',
  server: {
    port: 3333,
    host: true
  },
  vite: {
    ssr: {
      noExternal: ['@justinribeiro/lite-youtube']
    }
  },
  experimental: {
    assets: true
  },
  base: '/',
  integrations: [relativeLinks()]
});