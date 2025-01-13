<script setup lang="ts">
	import { ErrorPage } from '@cnamts/synapse'
</script>

<template>
	<div style="padding: 20px; background: rgb(231, 236, 245)">
		<ErrorPage
			page-title="une erreur est survenue"
			code="500"
			message="Une erreur est survenue de notre côté, veuillez réessayer plus tard. Si le problème persiste veuillez nous contacter par téléphone au 3646"
			btn-href="/"
			btn-text="Retour à l'accueil"
		/>
	</div>
</template>
