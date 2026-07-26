import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repoName ? `/${repoName}/` : '/';

const integrations = [tailwind(), react(), markdoc(), mdx()];

if (process.env.NODE_ENV !== 'production') {
  integrations.push(keystatic());
}

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.github.io',
  base,
  output: 'static',
  integrations,
});
