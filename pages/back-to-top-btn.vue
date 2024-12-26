<script setup lang="ts">
import { BackToTopBtn } from '@cnamts/synapse'
import { VCard, VSheet } from 'vuetify/components'

const vuetifyOptions = {
	btn: {
		variant: 'elevated',
		color: 'primary',
		rounded: true,
	},
	icon: {
		color: 'white',
	},
}
</script>

<template>
	<VCard
		id="target"
		width="100%"
		max-height="200px"
		class="overflow-y-auto"
		style="scroll-behavior: smooth"
	>
		<VSheet
			height="600px"
			class="d-flex flex-column align-center"
		>
			<p class="pa-2">
				Haut de la section.
			</p>
		</VSheet>
		<BackToTopBtn target="target">
			Retour en haut de la page
		</BackToTopBtn>
	</VCard>

	<br/>

	<VCard
		id="btn-customization"
		width="100%"
		max-height="200px"
		class="overflow-y-auto"
		style="scroll-behavior: smooth"
	>
		<VSheet
			height="600px"
			class="d-flex flex-column align-center"
		>
			<p class="pa-2">
				Haut de la section.
			</p>
		</VSheet>
		<BackToTopBtn
			target="btn-customization"
			:vuetify-options="vuetifyOptions"
		>
			Retour en haut
		</BackToTopBtn>
	</VCard>

	<br/>

	<VCard
		id="pill-btn"
		width="100%"
		max-height="200px"
		class="overflow-y-auto"
		style="scroll-behavior: smooth"
	>
		<VSheet
			height="600px"
			class="d-flex flex-column align-center"
		>
			<p class="pa-2">
				Haut de la section.
			</p>
		</VSheet>
		<BackToTopBtn
			target="pill-btn"
			:nudge-right="30"
			:nudge-bottom="30"
			:vuetify-options="vuetifyOptions"
		>
			Retour en haut
		</BackToTopBtn>
	</VCard>
</template>
