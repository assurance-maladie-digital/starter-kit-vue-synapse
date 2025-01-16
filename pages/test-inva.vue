<template>
	<div>
		<PageContainer>
			<BackBtn to="/"/>
			<VBtn color="primary">
				Primary
			</VBtn>
			<VBtn color="secondary">
				secondary
			</VBtn>
			<VBtn color="info">
				Info
			</VBtn>
			<VBtn color="success">
				Success
			</VBtn>
			<VBtn color="warning">
				Warning
			</VBtn>
			<VBtn color="error">
				Error
			</VBtn>
			<VBtn color="accent">
				Accent
			</VBtn>
			<VBtn color="light">
				Light
			</VBtn>
			<VBtn color="dark">
				Dark
			</VBtn>
			<VBtn color="risquePro">
				Risque Pro
			</VBtn>
			<VBtn class="inva">
				Violet inva
			</VBtn>

			<br /><br />

			<SubHeader
				sub-title-text="1 69 08 75 125 456 75"
				title-text="Paul Dupont"
			/>

			<br /><br />

			<v-alert type="success">
				Message de succès
			</v-alert>
		</PageContainer>
		<FooterBar
			hide-a11y-link
			hide-cgu-link
			hide-cookies-link
			hide-legal-notice-link
			hide-sitemap-link
		>
			<p class="text-secondary mb-0">Contenu supplémentaire.</p>
		</FooterBar>
	</div>
</template>

<script setup lang="ts">
import { PageContainer, FooterBar, BackBtn, SubHeader } from '@cnamts/synapse'

</script>

<style lang="scss" scoped>
@use '@cnamts/synapse/assets/tokens.scss';

.warning {
	color: black !important;
}
.dark {
	color: white !important;
}
.inva {
	background-color: tokens.$mauve-darken-60 !important;
	color: white;
}
</style>
