<script setup lang="ts">
import { DownloadBtn } from '@cnamts/synapse'
import { NotificationBar, useNotificationService } from '@cnamts/synapse'
import axios from 'axios'
import type { Notification } from '@cnamts/synapse/src/components/NotificationBar/types'

function download() {
	return axios.get('https://run.mocky.io/v3/884c25f5-6dc2-4c01-b8d9-26c54042f94f')
}

const { addNotification } = useNotificationService()

const notify = (message: string, type: Notification['type']) => {
	const notification: Notification = {
		id: Date.now().toString(),
		message,
		type,
		timeout: -1,
	}
	addNotification(notification)
}

const download2 = () => {
	return new Promise(() => { setTimeout(() => {}, 100000) })
}

const vuetifyOptions = {
	btn: {
		variant: 'plain',
		ripple: true,
		color: 'secondary',
	},
	icon: {
		class: 'ml-2 mr-2',
		color: 'secondary',
	}
}
</script>

<template>
	<NotificationBar />

	<DownloadBtn
		:file-promise="download"
		:btn="{ color: 'primary'}"
		@error="console.error"
		@success="notify('Votre attestation a été téléchargée', 'success')"
	>
		Download
	</DownloadBtn>

	<br/><br/>

	<DownloadBtn :file-promise="download2">
		Télécharger
	</DownloadBtn>

	<br/><br/>

	<DownloadBtn
		:file-promise="download"
		:vuetify-options="vuetifyOptions"
	>
		Télécharger
	</DownloadBtn>
</template>
