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
