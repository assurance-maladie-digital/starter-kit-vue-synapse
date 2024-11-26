import { defineStore } from 'pinia'
import { actions as notificationActions } from '@cnamts/synapse-bridge/modules/notification'

type NotificationPayload = {
	// replace the properties with the actual properties of your payload
	title: string
	message: string
	type: 'info' | 'warning' | 'error'
}
export const useNotificationStore = defineStore({
	id: 'notification',
	state: () => ({
		notificationPayload: null,
	}),
	actions: {
		create(payload: NotificationPayload) {
			this.notificationPayload = payload
			notificationActions.addNotification(
				{ commit: () => {}, state: {} },
				payload
			)
		},
		remove() {
			this.notificationPayload = null
			notificationActions.clearNotification({ commit: () => {} })
		},
	},
})
