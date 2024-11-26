import { createPinia } from 'pinia'
import { useCounterStore } from '../counter'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Counter Store', () => {
	let store: ReturnType<typeof useCounterStore>

	beforeEach(() => {
		const pinia = createPinia()
		store = useCounterStore(pinia)
	})

	it('should have an initial state of empty object', () => {
		expect(store.$state).toEqual({
			count: 0,
		})
	})
})
