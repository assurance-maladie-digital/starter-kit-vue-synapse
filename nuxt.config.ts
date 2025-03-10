// import { customLightTheme } from 'assets/customLightTheme'
// import { customDarkTheme } from 'assets/customDarkTheme'

import {
	cnamColorsTokens,
	cnamContextualTokens,
	cnamLightTheme,
	cnamDarkTheme,
	paColorsTokens,
	paContextualTokens,
	paLightTheme,
	paDarkTheme,
} from '@cnamts/synapse/designTokens'
import { createFlattenTheme } from '@cnamts/synapse/designTokens/utils'

import Components from 'unplugin-vue-components/vite'
import {fr} from 'vuetify/locale'

export default defineNuxtConfig({
	ssr: false,

	runtimeConfig: {
		public: {
			title: process.env.TITLE,
			message: process.env.MESSAGE,
			theme: process.env.THEME,
		},
	},

	devtools: {enabled: true},

	modules: [
		'vuetify-nuxt-module',
		'dayjs-nuxt',
		'@pinia/nuxt',
		'@nuxt/eslint',
	],

	vuetify: {
		vuetifyOptions: {
			locale: {
				locale: 'fr',
				messages: {fr},
			},
			icons: {
				defaultSet: 'mdi-svg',
			},
			theme: {
				defaultTheme: 'pa',
				themes: {
					cnam: {
						dark: false,
						colors: {
							...cnamLightTheme,
							...cnamDarkTheme,
						},
						variables: {
							'border-color': cnamColorsTokens.grey.base,
							'font-family': '"Arial", sans-serif',
							...createFlattenTheme(cnamContextualTokens),
						},
					},
					pa: {
						dark: false,
						colors: {
							...paLightTheme,
							...paDarkTheme,
						},
						variables: {
							'border-color': paColorsTokens.grey.base,
							'font-family': '"Roboto", sans-serif',
							...createFlattenTheme(paContextualTokens),
						},
					},
				},
			},
		},
	},

	build: {
		transpile: ['vuetify', '@cnamts/synapse'],
	},

	vite: {
		// change the component dirs to match our project layout
		plugins: [Components({dts: true, dirs: ['./components']})],
	},

	css: ['@cnamts/synapse/style.css', '~/assets/settings.scss'],

	imports: {
		dirs: ['./stores'],
	},

	dayjs: {
		locales: ['en', 'fr'],
		plugins: ['relativeTime', 'utc', 'timezone'],
		defaultLocale: 'fr',
		defaultTimezone: 'Europe/Paris',
	},

	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate'],
	},

	compatibilityDate: '2024-12-23',
})
