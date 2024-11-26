import { createPinia } from 'pinia'
import { useNotificationStore } from '../notifications'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Notification Store', () => {
	let store: ReturnType<typeof useNotificationStore>

	beforeEach(() => {
		const pinia = createPinia()
		store = useNotificationStore(pinia)
	})

	it('should have an initial state of empty object', () => {
		expect(store.$state).toEqual({
			notificationPayload: null,
		})
	})
})
