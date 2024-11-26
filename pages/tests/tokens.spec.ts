import type { Wrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Tokens from '@/pages/tokens.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { vuetify } from '@/tests/unit/setup'

describe('tokens page should render', () => {
	let wrapper: Wrapper<typeof Tokens>

	beforeEach(async () => {
		wrapper = mount(Tokens, {
			global: {
				plugins: [vuetify],
				mocks: {
					$vuetify: {
						theme: {
							themes: {
								light: {
									colors: {
										'blue-light': '#3A8DFF',
										'blue-dark': '#00509D',
										'red-light': '#FF6B6B',
										'red-dark': '#D00000',
									},
								},
							},
						},
					},
					$nuxt: {
						$config: {
							public: {
								theme: {},
							},
						},
					},
				},
			},
		})
		await wrapper.vm.$nextTick()
	})

	it('groups colors by their base color', () => {
		const expected = {
			background: { background: '#FFFFFF' },
			surface: {
				surface: '#FFFFFF',
				'surface-bright': '#FFFFFF',
				'surface-light': '#EEEEEE',
				'surface-variant': '#424242',
			},
			on: { 'on-surface-variant': '#EEEEEE' },
			primary: { primary: '#1867C0', 'primary-darken-1': '#1F5592' },
			secondary: {
				secondary: '#48A9A6',
				'secondary-darken-1': '#018786',
			},
			error: { error: '#B00020' },
			info: { info: '#2196F3' },
			success: { success: '#4CAF50' },
			warning: { warning: '#FB8C00' },
		}

		expect(wrapper.vm.groupedColors).toEqual(expected)
	})

	it('returns true for dark color', () => {
		expect(wrapper.vm.isDarkColor('#000000')).toBe(true)
	})

	it('returns false for light color', () => {
		expect(wrapper.vm.isDarkColor('#FFFFFF')).toBe(false)
	})

	it('returns false for medium color', () => {
		expect(wrapper.vm.isDarkColor('#808080')).toBe(false)
	})
})
