<template>
	<VApp>
		<main>
			<HeaderNavigationBar
				service-title="Titre du service"
				service-sub-title="Description du service"
				:items="navigationItems"
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
				<p class="text-white mb-0">Contenu supplémentaire.</p>
			</FooterBar>
		</main>
	</VApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PageContainer, HeaderNavigationBar, FooterBar } from '@cnamts/synapse'

export default defineComponent({
	components: {
		PageContainer,
		HeaderNavigationBar,
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
					label: 'Inva',
					to: '/test-inva',
				},
				{
					label: 'SyAlert',
					to: '/sy-alert',
				},
				{
					label: 'PageContainer',
					to: '/page-container',
				},
			],
		}
	},
})
</script>
