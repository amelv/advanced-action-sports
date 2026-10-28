import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

const redirectPaths = new Set([
  '/event-space/',
  '/book-party-warwick-ri/',
  '/book-party-webster-ma/',
  '/online-waiver/',
]);

export default defineConfig({
  site: 'https://www.advancedactionsports.com',
  output: 'static',
  integrations: [
    sitemap({ filter: (page) => !redirectPaths.has(new URL(page).pathname) }),
    react(),
  ],
});
