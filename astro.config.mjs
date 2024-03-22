import { defineConfig } from 'astro/config';
import relativeLinks from "astro-relative-links";
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
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
  redirects: {
    '/silure': '/especes-defendues/silure',
    '/anguilles': '/especes-defendues/anguille',
    '/maigre': '/especes-defendues/maigre',
    '/toutes-les-esp%C3%A8ces-de-poissons-marins': '/especes-defendues/poissons-marins',
    '/classification-des-rivi%C3%A8res-%C3%A0-saumon': '/blog/classification-des-rivieres-a-saumon'
  },
  base: '/',
  markdown: {
    remarkPlugins: [[remarkToc, { heading: 'Table des matières' }]],
    remarkRehype: {
		  footnoteLabel: 'Notes',
		  footnoteBackLabel: 'Retour au contenu',
		},
  },
  integrations: [relativeLinks(), sitemap(), mdx(), tailwind({
    applyBaseStyles: false
  })]
});