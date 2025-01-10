<script setup lang="ts">
import { DataListGroup } from '@cnamts/synapse'
import { mdiCalendar, mdiAccount, mdiDoctor, mdiCardAccountDetails, mdiPencil } from '@mdi/js'
import { ref } from 'vue'

const items = [
	{
		title: 'Informations patient',
		items: [
			{
				key: 'Nom',
				value: 'Dupont',
				icon: 'accountIcon',
			},
			{
				key: 'Prénom',
				value: 'Paul',
				icon: 'accountIcon',
			},
			{
				key: 'Date de naissance',
				value: '24/09/1970',
				icon: 'calendarIcon',
			},
		],
	},
	{
		title: 'Médecin traitant',
		items: [
			{
				key: 'Nom du praticien',
				value: 'Gérard Leblanc',
				icon: 'doctorIcon',
			},
			{
				key: 'N° RPPS',
				value: 'XXXXX',
				icon: 'cardAccountIcon',
			},
		],
	},
	{
		title: 'Autres informations',
		items: [
			{
				key: 'Dernière modification',
				value: '04/06/2020',
				icon: 'editIcon',
			},
		],
	},
]

const itemsAction = ref([
	{
		title: 'Informations patient',
		items: [
			{
				key: 'Nom',
				value: 'Dupont',
			},
			{
				key: 'Prénom',
				value: 'Paul',
			},
			{
				key: 'Date de naissance',
				value: '24/09/1970',
				action: 'Modifier',
			},
		],
	},
	{
		title: 'Médecin traitant',
		items: [
			{
				key: 'Nom du praticien',
				value: 'Gérard Leblanc',
			},
			{
				key: 'N° RPPS',
				value: 'XXXXX',
			},
		],
	},
	{
		title: 'Autres informations',
		items: [
			{
				key: 'Dernière modification',
				value: '04/06/2020',
			},
		],
	},
])

const itemsChips = [
	{
		title: 'Informations patient',
		items: [
			{
				key: 'Nom',
				value: 'Dupont',
				chip: true
			},
			{
				key: 'Prénom',
				value: 'Paul',
				chip: true
			},
			{
				key: 'Date de naissance',
				value: '24/09/1970',
				chip: true
			},
		],
	},
	{
		title: 'Médecin traitant',
		items: [
			{
				key: 'Nom du praticien',
				value: 'Gérard Leblanc',
				chip: true
			},
			{
				key: 'N° RPPS',
				value: 'XXXXX',
				chip: true
			},
		],
	},
	{
		title: 'Autres informations',
		items: [
			{
				key: 'Dernière modification',
				value: '04/06/2020',
				chip: true
			},
		],
	},
]

const itemsHtml = [
	{
		title: 'Informations patient',
		items: [
			{
				key: 'Nom',
				value: 'Dupont',
			},
			{
				key: 'Prénom',
				value: 'Paul',
			},
			{
				key: 'Date de naissance',
				value: '24/09/1970',
			},
		],
	},
	{
		title: 'Médecin traitant',
		items: [
			{
				key: 'Nom du praticien',
				value: 'Gérard Leblanc',
			},
			{
				key: 'N° RPPS',
				value: 'XXXXX',
			},
		],
	},
	{
		title: 'Autres informations',
		items: [
			{
				key: 'Adresse',
				value: '<b>50 Avenue du Professeur André Lemierre</b><br>75020 Paris'
			},
		],
	},
]

const icons = {
	calendarIcon: mdiCalendar,
	accountIcon: mdiAccount,
	doctorIcon: mdiDoctor,
	cardAccountIcon: mdiCardAccountDetails,
	editIcon: mdiPencil,
}

const updateBirthdate = (eventValue: object) => {
	itemsAction.value[eventValue.dataListIndex].items[eventValue.itemIndex].value = '25/09/1970'
}
</script>

<template>
	<DataListGroup :items="items" />
	<br/>
	<DataListGroup
		:items="items"
		:icons="icons"
	/>
	<br />
	<DataListGroup
		:items="itemsAction"
		@click:list-item="updateBirthdate"
	/>
	<br/>
	<DataListGroup
		:items="items"
		item-width="300px"
	/>
	<br/>
	<DataListGroup :items="itemsChips" />
	<br/>
	<DataListGroup
		:items="itemsHtml"
		render-html-value
	/>
	<br/>
	<DataListGroup
		:items="items"
		loading
	/>
</template>
