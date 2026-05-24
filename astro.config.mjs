import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://boboegg.github.io',
  base: '/qingyin-100-life-site',
  output: 'static',
  i18n: {
    locales: ['zh-tw', 'en'],
    defaultLocale: 'zh-tw',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
