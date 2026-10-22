import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://derivedstack.github.io',
    compressHTML: true,
    integrations: [sitemap()],
});
