import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src', // 여기 추가: @ -> src 폴더 매핑
      },
    },
  },
  site: 'https://yourdomain.com',
  integrations: [sitemap()],
});
