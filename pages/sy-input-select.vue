<script setup lang="ts">
import { SyInputSelect } from '@cnamts/synapse'
import { ref } from 'vue'

const items = [
	{ text: 'Option 1', value: '1' },
	{ text: 'Option 2', value: '2' },
]

const items2 =  [
	{ customKey: 'Choix 1', value: '1' },
	{ customKey: 'Choix 2', value: '2' }
]

const value = ref(undefined)

const errorMessages = ref([])

const triggerError = () => {
	errorMessages.value = ['This is a test error message']
}

const vuetifyOptions = {
	menu: {
		color: 'secondary',
	},
	option: {
		color: 'secondary',
	},
}
</script>

<template>
	Selected: {{ value }}

	<br/><br/>

	<SyInputSelect
		v-model="value"
		:items="items"
	/>

	<br/>

	<SyInputSelect
		:items="items"
		required
	/>

	<br/>

	<SyInputSelect
		:items="items"
		:error-messages="errorMessages"
	/>
	<VBtn @click="triggerError">
		Trigger Error
	</VBtn>

	<br/><br/>

	<SyInputSelect
		:items="items2"
		text-key="customKey"
	/>

	<br/>

	<SyInputSelect
		:items="items"
		:vuetify-options="vuetifyOptions"
    />
</template>
