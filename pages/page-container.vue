<script setup lang="ts">
import { PageContainer } from '@cnamts/synapse'
</script>

<template>
	<PageContainer>
		Contenu de la page
	</PageContainer>

	<br/>

	<PageContainer size="sm">
		Contenu de la page
	</PageContainer>

	<br/>

	<PageContainer color="primary">
		<div class="pa-8">
			Contenu de la page
		</div>
	</PageContainer>

	<br/>

	<PageContainer>
		<VCard class="pa-8">
			Contenu de la page
		</VCard>
	</PageContainer>
</template>
