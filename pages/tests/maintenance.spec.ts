// @vitest-environment nuxt
import Maintenance from '../maintenance.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'
import { vuetify } from '@/tests/unit/setup'

describe('maintenance page should render', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(Maintenance, {
			global: {
				plugins: [vuetify],
			},
		})
		expect(wrapper.html()).toMatchSnapshot()

		const h2Text = wrapper.find('h2').text()
		expect(h2Text).toContain('Maintenance en cours')
	})
})
