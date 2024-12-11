<template>
	<VApp>
		<main>
			<HeaderBar
				service-title="Titre du service"
				service-sub-title="Description du service"
				:navigation-items="navigationItems"
			/>
			<PageContainer>
				<slot />
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
		</main>
	</VApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PageContainer, HeaderBar, FooterBar } from '@cnamts/synapse'

export default defineComponent({
	components: {
		PageContainer,
		HeaderBar,
		FooterBar,
	},
	data() {
		return {
			navigationItems: [
				{
					label: 'Accueil',
					to: '/home',
				},
				{
					label: 'Tokens',
					to: '/tokens',
				},
				{
					label: 'Maintenance',
					to: '/maintenance',
				},
				{
					label: 'Erreur',
					to: '/not-found',
				},
			],
		}
	},
})
</script>
