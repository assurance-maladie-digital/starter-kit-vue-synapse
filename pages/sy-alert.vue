<script setup lang="ts">
import { SyAlert } from '@cnamts/synapse'
import { ref } from 'vue'
import { mdiAccountCheck } from '@mdi/js'

const icon = mdiAccountCheck;
const showAlert = ref(true);
</script>

<template>
	<div>
		<SyAlert v-model="showAlert" type="warning" variant="tonal" :closable="true">
			<template #default>This is a warning alert</template>
		</SyAlert>

		<br/>

		<SyAlert v-model="showAlert" type="warning" variant="outlined" :closable="true">
			<template #default>This is a warning alert</template>
		</SyAlert>

		<br/>

		<SyAlert v-model="showAlert" type="success" variant="tonal" :closable="true">
			<template #default>This is a success alert</template>
			<template #icon>{{ icon }}</template>
		</SyAlert>

		<br/>

		<VBtn v-if="!showAlert" color="primary" @click="showAlert = true">
			Réinitialiser
		</VBtn>
	</div>
</template>
