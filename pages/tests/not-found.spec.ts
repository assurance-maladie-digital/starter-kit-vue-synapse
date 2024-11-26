import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import NotFound from '../not-found.vue'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { vuetify } from '@/tests/unit/setup'

describe('not found page should render', () => {
	const mockRouter = {
		push: vi.fn(),
	}

	const mockRoute = {
		fullPath: '/test',
		name: undefined,
		path: '/test',
	}

	let wrapper: VueWrapper<InstanceType<typeof NotFound>>

	beforeEach(async () => {
		wrapper = mount(NotFound, {
			global: {
				plugins: [vuetify],
				mocks: {
					$router: mockRouter,
					$route: mockRoute,
				},
			},
		})
		await wrapper.vm.$nextTick()
	})

	it('should render and call setSupportId method', async () => {
		const h2Text = wrapper.find('h2').text()
		expect(h2Text).toContain('Page non trouvée')

		wrapper.vm.setSupportId()
		await wrapper.vm.$nextTick()

		expect(mockRouter.push).toHaveBeenCalled()
	})
})
