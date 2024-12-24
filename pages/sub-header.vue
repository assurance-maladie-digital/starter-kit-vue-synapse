<script setup lang="ts">
import { SubHeader } from '@cnamts/synapse'

const items = [
	{
		title: 'Informations patient',
		items: [
			{ key: 'Date de naissance', value: '24/09/1970', action: 'Modifier' },
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

const items2 = [
	{
		title: 'Informations patient',
		items: [
			{ key: 'Date de naissance', value: '24/09/1970' },
			{ key: 'Adresse', value: '<b>50 Avenue du Professeur André Lemierre</b><br/>75020 Paris' },
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

const updateInfo = (eventValue: { dataListIndex: number, itemIndex: number }) => {
	items[eventValue.dataListIndex].items[eventValue.itemIndex].value = '25/09/1970'
}
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

	<br/>

	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
		:data-list-group-items="items"
		@click:list-item="updateInfo"
	/>

	<br/>

	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
		:data-list-group-items="items2"
		render-html-value
	/>

	<br/>

	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
		:data-list-group-items="items"
		loading
	/>

	<br/>

	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
	>
		<template #additional-informations>
			<VSpacer />
			<p class="white--text mt-8 mb-0">
				Profil complété à 50%
			</p>
			<VProgressLinear
				:model-value="50"
				color="#fff"
				height="8px"
				class="mt-2 mb-1"
				background-color="#fff"
				background-opacity=".24"
			/>
		</template>
	</SubHeader>

	<br/>

	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
	>
		<template #back-btn>
			<VBtn
				color="white"
				variant="tonal"
				class="mb-4"
			>
				Retour
			</VBtn>
		</template>
	</SubHeader>

	<br/>

	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
	>
		<template #sub-title>
			<h4 class="title mt-1">
				Traité par Paul Dupont
			</h4>
		</template>
	</SubHeader>
</template>
