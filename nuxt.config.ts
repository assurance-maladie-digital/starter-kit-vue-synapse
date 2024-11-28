// import { customLightTheme } from 'assets/customLightTheme'
// import { customDarkTheme } from 'assets/customDarkTheme'
import { cnamLightTheme } from '@cnamts/synapse/designTokens/tokens/cnam/cnamLightTheme'
// import { cnamDarkTheme } from '@cnamts/synapse/designTokens/tokens/cnam/cnamDarkTheme'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
	ssr: false,
	runtimeConfig: {
		public: {
			title: process.env.TITLE,
			message: process.env.MESSAGE,
			theme: process.env.THEME,
		},
	},
	devtools: { enabled: true },
	modules: [
		'vuetify-nuxt-module',
		'dayjs-nuxt',
		'@pinia/nuxt',
		'@nuxt/eslint',
	],
	vuetify: {
		vuetifyOptions: {
			icons: {
				defaultSet: 'mdi-svg',
			},
			theme: {
				defaultTheme: 'light',
				themes: {
					light: {
						colors: {
							...cnamLightTheme,
							// ...customLightTheme
						},
					},
					// dark: {
					// 	colors: {
					// 		...cnamDarkTheme,
					// 		...customDarkTheme,
					// 	},
					// },
				},
			},
		},
	},
	build: {
		transpile: ['vuetify', '@cnamts/synapse'],
	},
	vite: {
		// change the component dirs to match our project layout
		plugins: [Components({ dts: true, dirs: ['./components'] })],
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
})
