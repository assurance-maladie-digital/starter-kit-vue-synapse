// @vitest-environment nuxt
import HelloWorld from '../HelloWorld.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'

describe('HelloWorld', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(HelloWorld)

		expect(wrapper.html()).toMatchSnapshot()
		expect(wrapper.text()).toContain('Hello World!')
	})
})
