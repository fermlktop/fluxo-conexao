import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  base: '/fluxo-conexao',
  adapter: cloudflare(),
  build: {
    inlineStylesheets: 'always',
  },
});
