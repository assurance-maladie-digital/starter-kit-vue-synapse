<script setup lang="ts">
	import { PageContainer, FooterBar } from '@cnamts/synapse'
</script>

<template>
	<VApp>
		<main>
			<Header/>
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
