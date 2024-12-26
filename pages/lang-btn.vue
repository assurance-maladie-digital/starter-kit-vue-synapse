<script setup lang="ts">
import { LangBtn } from '@cnamts/synapse'
import { ref } from 'vue'

const value = ref('fr')
const items = ['fr', 'en', 'co']
const ariaLabel = 'Choix de la langue'
</script>

<template>
	{{ value }}
	<LangBtn
		v-model="value"
		:available-languages="items"
		:aria-label="ariaLabel"
		hide-down-arrow
	/>
</template>
