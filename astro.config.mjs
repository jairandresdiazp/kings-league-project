import { defineConfig } from 'astro/config'

import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import critters from 'astro-critters'

const website = 'https://kingsleague.diazp.co/'

// https://astro.build/config
export default defineConfig({
	site: website,
	server: {
		host: true
	},
	integrations: [
		tailwind(),
		critters(),
		prefetch(),
		sitemap({
			lastmod: new Date()
		})
	]
})
