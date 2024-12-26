<script setup lang="ts">
import { BackBtn } from '@cnamts/synapse'
</script>

<template>
	<BackBtn/>

	<br/>

	<VSheet color="primary" class="pa-4">
		<BackBtn dark />
	</VSheet>

	<br/>

	<BackBtn hide-back-icon />

	<br/>

	<VSheet
		color="primary"
		class="pa-4"
	>
		<BackBtn
			dark
			hide-back-icon
		/>
	</VSheet>
</template>
