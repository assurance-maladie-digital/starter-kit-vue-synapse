<script setup lang="ts">
import { SySelect } from '@cnamts/synapse'
import { ref } from 'vue'

const selectedValue = ref(undefined)

const items = [
	{ text: 'Option 1', value: '1' },
	{ text: 'Option 2', value: '2' },
]

const items2 =  [
	{ customKey: 'Choix 1', value: '1' },
	{ customKey: 'Choix 2', value: '2' },
]

const errorMessages = ref([])

const triggerError = () => {
	errorMessages.value = ['This is a test error message']
}
</script>

<template>
	SelectedValue: {{ selectedValue }}

	<br/><br/>

	<SySelect
		v-model="selectedValue"
		:items="items"
	/>

	<br/>

	<SySelect
		v-model="selectedValue"
		:items="items"
		required
	/>

	<br/>

	<SySelect
		v-model="selectedValue"
		:items="items"
		:error-messages="errorMessages"
	/>
	<VBtn @click="triggerError">
		Trigger Error
	</VBtn>

	<br/><br/>

	<SySelect
		v-model="selectedValue"
		:items="items2"
		text-key="customKey"
	/>
</template>
