<script setup lang="ts">
import { SubHeader } from '@cnamts/synapse'

const items = [
	{
		title: 'Informations patient',
		items: [
			{ key: 'Date de naissance', value: '24/09/1970' },
			{ key: 'Adresse', value: '50 Avenue du Professeur André Lemierre 75020 Paris' },
		],
	},
	{
		title: 'Médecin traitant',
		items: [
			{ key: 'Nom du praticien', value: 'Gérard Leblanc' },
			{ key: 'N° RPPS', value: 'XXXXX' },
		],
	},
	{
		title: 'Autres informations',
		items: [
			{ key: 'Dernière modification', value: '04/06/2020' },
		],
	},
]
</script>

<template>
	<SubHeader
		back-btn-text="Back"
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
	/>

	<br/>

	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
		:data-list-group-items="items"
	/>
</template>
