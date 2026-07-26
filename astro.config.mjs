import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isUserSite = repoName?.endsWith('.github.io');
const base = isUserSite || !repoName ? '/' : `/${repoName}/`;

const integrations = [tailwind(), react(), markdoc(), mdx()];

if (process.env.NODE_ENV !== 'production') {
  integrations.push(keystatic());
}

export default defineConfig({
  site: process.env.SITE_URL ?? (owner ? `https://${owner.toLowerCase()}.github.io` : 'https://kaleab-ayenew.github.io'),
  base,
  output: 'static',
  integrations,
});
