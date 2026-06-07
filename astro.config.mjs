// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.tkawen.com',
	integrations: [
		starlight({
			title: 'TKAWEN Docs',
			tagline: 'Algerian software ecosystem — commerce, certification, meetings & AI',
			head: [
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'TKAWEN',
						url: 'https://tkawen.com',
						description: 'Algerian software ecosystem for commerce, certification, meetings and AI.',
						founder: { '@type': 'Person', name: 'Hartem Yaakoub' },
						sameAs: [
							'https://github.com/tkawen',
							'https://www.npmjs.com/org/tkawen',
							'https://mcp.tkawen.com',
							'https://mystoq.com',
							'https://liqaa.io',
						],
					}),
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/tkawen/packages' },
			],
			sidebar: [
				{
					label: 'Start · ابدأ',
					items: [
						{ label: 'Getting Started · البداية', slug: 'getting-started' },
						{ label: 'Examples · أمثلة', slug: 'examples' },
					],
				},
				{
					label: 'Packages · الحزم',
					items: [{ autogenerate: { directory: 'packages' } }],
				},
				{
					label: 'MCP Gateway · البوّابة',
					items: [
						{ label: 'TKAWEN Intelligence Gateway', slug: 'mcp' },
					],
				},
			],
		}),
	],
});
