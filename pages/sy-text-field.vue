<script setup lang="ts">
import { ref } from 'vue'
import { SyTextField } from '@cnamts/synapse'

const model = ref('')

const errorMessages = ref([])

const triggerError = () => {
	errorMessages.value = ['This is a test error message']
}

import { mdiAccountBox } from '@mdi/js'

const iconName = mdiAccountBox
</script>

<template>
	Text saisie: {{ model }}

	<br/><br/>

	<SyTextField
		v-model="model"
		label="Label"
		color="primary"
		is-clearable
	/>

	<br/>

	<SyTextField required />

	<br/>

	<SyTextField :error-messages="errorMessages" />
	<VBtn @click="triggerError">
		Trigger Error
	</VBtn>

	<br/><br/>

	<SyTextField prepend-icon="info" />

	<br/>

	<SyTextField append-icon="success" />

	<br/>

	<SyTextField prepend-inner-icon="info" />

	<br/>

	<SyTextField
		prepend-inner-icon="info"
		show-divider
	/>

	<br/>

	<SyTextField append-inner-icon="success" />

	<br/>

	<SyTextField>
		<template #append-inner>
			<VIcon>
				{{ iconName }}
			</VIcon>
		</template>
	</SyTextField>
</template>
