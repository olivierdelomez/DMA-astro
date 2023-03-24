import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

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
   integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/content/posts',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Titre du post' },
              { name: 'body', widget: 'markdown', label: 'Contenu du post' },
            ],
          },
        ],
      },
    }),
  ],
});
