<script setup lang="ts">
import { DialogBox } from '@cnamts/synapse'
import { ref } from 'vue'

const vuetifyOptions = {
	card: {
		rounded: 'xl',
	},
	cardTitle: {
		class: 'pa-0 mb-4 accent--text',
	},
	closeBtn: {
		class: {
			'd-none': true,
		},
	},
	icon: {
		color: 'accent',
	},
	cancelBtn: {
		color: 'accent',
		text: false,
	},
	confirmBtn: {
		color: 'accent',
		text: true,
	},
}

const dialogOpen = ref(false)
const dialogOpen2 = ref(false)
const dialogOpen3 = ref(false)
const dialogOpen4 = ref(false)
const dialogOpen5 = ref(false)
const dialogOpen6 = ref(false)
const dialogOpen7 = ref(false)
const dialogOpen8 = ref(false)
</script>

<template>
	Default
	<VBtn
		color="primary"
		@click="dialogOpen = !dialogOpen"
	>Toggle DialogBox</VBtn>
	<DialogBox
		v-model="dialogOpen"
		title="DialogBox title"
		@confirm="dialogOpen = false"
		@cancel="dialogOpen = false"
	>
		DialogBox content
	</DialogBox>

	<br/><br/>

	Btn text
	<VBtn
		color="primary"
		@click="dialogOpen2 = !dialogOpen2"
	>Toggle DialogBox</VBtn>
	<DialogBox
		v-model="dialogOpen2"
		title="DialogBox title"
		cancelBtnText="Retour"
		confirmBtnText="Valider"
		@confirm="dialogOpen2 = false"
		@cancel="dialogOpen2 = false"
	>
		DialogBox content
	</DialogBox>

	<br/><br/>

	Hide actions
	<VBtn
		color="primary"
		@click="dialogOpen3 = !dialogOpen3"
	>Toggle DialogBox</VBtn>
	<DialogBox
		v-model="dialogOpen3"
		title="DialogBox title"
		hideActions
	>
		DialogBox content
	</DialogBox>

	<br/><br/>

	Persistent
	<VBtn
		color="primary"
		@click="dialogOpen4 = !dialogOpen4"
	>Toggle DialogBox</VBtn>
	<DialogBox
		v-model="dialogOpen4"
		title="DialogBox title"
		persistent
		@confirm="dialogOpen4 = false"
		@cancel="dialogOpen4 = false"
	>
		DialogBox content
	</DialogBox>

	<br/><br/>

	Actions Slot
	<VBtn
		color="primary"
		@click="dialogOpen5 = !dialogOpen5"
	>Toggle DialogBox</VBtn>
	<DialogBox
		v-model="dialogOpen5"
		title="DialogBox title"
	>
		<template #actions>
			<VBtn
				color="primary"
				@click="dialogOpen5 = false"
			>Action</VBtn>
		</template>
		DialogBox content
	</DialogBox>

	<br/><br/>

	Title Slot
	<VBtn
		color="primary"
		@click="dialogOpen6 = !dialogOpen6"
	>Toggle DialogBox</VBtn>
	<DialogBox
		v-model="dialogOpen6"
	>
		<template #title>
			<VBtn
				color="primary"
				@click="dialogOpen6 = false"
			>Title slot</VBtn>
		</template>
		DialogBox content
	</DialogBox>

	<br/><br/>

	Width
	<VBtn
		color="primary"
		@click="dialogOpen7 = !dialogOpen7"
	>Toggle DialogBox</VBtn>
	<DialogBox
		v-model="dialogOpen7"
		title="DialogBox title"
		width="500px"
		@confirm="dialogOpen7 = false"
		@cancel="dialogOpen7 = false"
	>
		DialogBox content
	</DialogBox>

	<br/><br/>

	VuetifyOptions
	<VBtn
		color="primary"
		@click="dialogOpen8 = !dialogOpen8"
	>Toggle DialogBox</VBtn>
	<DialogBox
		v-model="dialogOpen8"
		title="DialogBox title"
		:vuetify-options="vuetifyOptions"
		@confirm="dialogOpen8 = false"
		@cancel="dialogOpen8 = false"
	>
		DialogBox content
	</DialogBox>
</template>
