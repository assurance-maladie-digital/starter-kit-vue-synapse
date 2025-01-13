<script setup lang="ts">
	import { VBtn } from 'vuetify/components'
	import { NotificationBar, useNotificationService } from '@cnamts/synapse'
	import type { Notification } from '@cnamts/synapse/src/components/NotificationBar/types'

	const { addNotification } = useNotificationService()

	const envoyerNotification = (message: string, type: Notification['type']) => {
		const notification: Notification = {
			id: Date.now().toString(),
			message,
			type,
			timeout: -1,
		}
		addNotification(notification)
	}
</script>

<template>
	<div>
		<NotificationBar
			bottom
			rounded="lg"
		>
			<template #action>
				<VBtn variant="outlined">
					Valider
				</VBtn>
			</template>
		</NotificationBar>

		<VBtn
			color="info"
			@click="envoyerNotification('Info notification', 'info')"
		>
			Info
		</VBtn>
		<VBtn
			color="success"
			@click="envoyerNotification('Success notification', 'success')"
		>
			Success
		</VBtn>
		<VBtn
			color="warning"
			@click="envoyerNotification('Warning notification', 'warning')"
		>
			Warning
		</VBtn>
		<VBtn
			color="error"
			@click="envoyerNotification('Error notification', 'error')"
		>
			Error
		</VBtn>
	</div>
</template>

<style scoped>
    .button-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 20px;
    }
</style>
