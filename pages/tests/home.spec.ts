import { mount } from '@vue/test-utils'
import Home from '../home.vue'
import { describe, it, expect } from 'vitest'
import { vuetify } from '@/tests/unit/setup'

describe('home page should render', () => {
	it('should render', async () => {
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()

		const h1Text = wrapper.find('h1').text()
		expect(h1Text).toContain('Accueil')
	})

	it('renders title from $config', async () => {
		const mockConfig = {
			public: {
				title: 'Test Title',
			},
		}

		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
				mocks: {
					$config: mockConfig,
				},
			},
		})

		const h1Text = wrapper.find('h1').text()
		expect(h1Text).toContain('Test Title')
	})

	it('renders default title when $config is not available', async () => {
		const wrapper = mount(Home, {
			global: {
				plugins: [vuetify],
				mocks: {
					$config: null,
				},
			},
		})

		const h1Text = wrapper.find('h1').text()
		expect(h1Text).toContain('Accueil')
	})
})
