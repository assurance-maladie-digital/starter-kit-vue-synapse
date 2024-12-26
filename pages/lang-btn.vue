<script setup lang="ts">
import { LangBtn } from '@cnamts/synapse'
import { ref } from 'vue'

const value = ref('fr')
const items = ['fr', 'en', 'co']
const ariaLabel = 'Choix de la langue'

const vuetifyOptions = {
	btn: {
		color: 'primary',
		variant: 'flat',
		ripple: true,
	},
}
</script>

<template>
	{{ value }}
	<LangBtn
		v-model="value"
		:available-languages="items"
		:aria-label="ariaLabel"
		hide-down-arrow
	/>

	<br/>

	<LangBtn
		v-model="value"
		:aria-label="ariaLabel"
		available-languages="*"
	/>

	<br/>

	<LangBtn
		v-model="value"
		:items="items"
		:aria-label="ariaLabel"
		hide-down-arrow
	/>

	<br/>

	<LangBtn
		v-model="value"
		:items="items"
		:aria-label="ariaLabel"
		:vuetify-options="vuetifyOptions"
	/>
</template>
