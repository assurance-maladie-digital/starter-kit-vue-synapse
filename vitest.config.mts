import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		coverage: {
			enabled: true,
			provider: 'istanbul',
			reportsDirectory: './tests/unit/coverage',
			include: ['**/components/**', '**/pages/**', '**/store/**'],
		},
		server: {
			deps: {
				inline: [/vuetify.*/],
			},
		},
		silent: true,
		setupFiles: ['./tests/unit/setup.ts'],
	},
})
