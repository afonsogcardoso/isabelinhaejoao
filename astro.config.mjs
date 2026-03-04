import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://isabelinhaejoao.pt';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'always',
  scopedStyleStrategy: 'where'
});
