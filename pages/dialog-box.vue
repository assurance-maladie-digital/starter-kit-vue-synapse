<script lang="ts" setup>
	import { ref } from "vue";
	import { DialogBox } from "@cnamts/synapse";

	const modelValue = ref(true);
</script>

<template>
	<DialogBox v-model="modelValue">
		DialogBox content

		<template #title>DialogBox title</template>
	</DialogBox>
</template>
