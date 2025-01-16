<script setup lang="ts">
import { CookieBanner } from '@cnamts/synapse'

const modelValue = ref(true)

const onAccept = () => {
	console.log('Accept')
}

const onReject = () => {
	console.log('Reject')
}

const onCustomize = () => {
	console.log('Customize')
}

const items = {
	essentials: [
		{
			name: 'session',
			description: 'Sauvegarde la session pour rester connecté.',
			conservation: '20 heures',
		},
		{
			name: 'cookie_policy',
			description: 'Sauvegarde les préférences de cookies.',
			conservation: '1 an',
		},
	],
	functional: [
		{
			name: 'contrast',
			description: 'Sauvegarde la personnalisation de l’affichage.',
			conservation: '1 an',
		},
	],
	analytics: [
		{
			name: 'user_id',
			description: 'Sauvegarde l’identifiant unique de visiteur.',
			conservation: '6 mois',
		},
	],
}

const vuetifyOptions = {
	banner: {
		color: '#ced9eb',
	},
	customizeBtn: {
		variant: 'text',
		color: 'orange',
	},
	rejectBtn: {
		variant: 'outlined',
	},
	acceptBtn: {
		variant: 'outlined',
	},
}
</script>

<template>
	{{ modelValue }}
<!--	<CookieBanner
		@accept="onAccept"
		@reject="onReject"
		@customize="onCustomize"
		v-model="modelValue"
	>
		<p><b>Custom</b> description</p>
	</CookieBanner>-->

<!--	<CookieBanner
		v-model="modelValue"
		:items
		@accept="onAccept"
		@reject="onReject"
		@customize="onCustomize"
	/>-->

	<CookieBanner
		:items
		@accept="onAccept"
		@reject="onReject"
		@customize="onCustomize"
		v-model="modelValue"
		:vuetifyOptions="vuetifyOptions"
	/>
</template>
