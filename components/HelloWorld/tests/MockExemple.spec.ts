// @vitest-environment nuxt
import { describe, expect, it, vi, beforeEach } from 'vitest'

async function appConfig() {
	return await $fetch<Record<string, string>>(
		'@/public/json/config.env.json'
	).then((res) => {
		for (const key in res) {
			const config = useRuntimeConfig()
			config.public[key] = res[key]
		}
	})
}

describe('get config injectEnv', () => {
	beforeEach(() => {
		// Mock the $fetch function
		vi.stubGlobal(
			'$fetch',
			vi.fn().mockResolvedValue({
				title: 'Accueil',
				message: 'Bienvenue',
				theme: 'bootstrap',
			})
		)

		// Mock the config.env.json file
		vi.mock('@/public/json/config.env.json', () => ({
			default: {
				title: 'Accueil',
				message: 'Bienvenue',
				theme: 'bootstrap',
			},
		}))
	})

	it('should render app config', async () => {
		const config = useRuntimeConfig()

		await appConfig()

		expect(config.public.title).toBe('Accueil')
		expect(config.public.message).toBe('Bienvenue')
		expect(config.public.theme).toBe('bootstrap')
	})

	it('should render custom config', async () => {
		const config = useRuntimeConfig()

		// Mock the $fetch function
		vi.stubGlobal(
			'$fetch',
			vi.fn().mockResolvedValue({
				title: 'Coucou',
				message: 'Bienvenue',
				theme: 'bootsrap',
			})
		)

		await appConfig()

		expect(config.public.title).toBe('Coucou')
	})
})
