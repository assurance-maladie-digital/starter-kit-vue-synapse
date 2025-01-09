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

		<div class="button-group">
			<VBtn
				color="info"
				@click="envoyerNotification('Première notification', 'info')"
			>
				Envoyer Notification 1
			</VBtn>
			<VBtn
				color="success"
				@click="envoyerNotification('Deuxième notification', 'success')"
			>
				Envoyer Notification 2
			</VBtn>
			<VBtn
				color="error"
				@click="envoyerNotification('Troisième notification', 'error')"
			>
				Envoyer Notification 3
			</VBtn>
		</div>
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
