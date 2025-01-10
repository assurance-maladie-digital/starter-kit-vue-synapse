<script setup lang="ts">
import { DataList } from '@cnamts/synapse'
import { mdiCalendar, mdiAccount, mdiInformationOutline } from '@mdi/js'
import { ref } from 'vue'

const icons = {
	calendarIcon: mdiCalendar,
	accountIcon: mdiAccount,
	mdiInformationOutline: mdiInformationOutline,
}

const itemOptions = {
	icon: {
		color: 'primary',
		class: 'mt-0 mr-4',
	},
}

const items = [
	{
		key: 'Nom',
		value: 'Dupont',
		icon: 'accountIcon',
	},
	{
		key: 'Prénom',
		value: 'Paul',
		icon: 'accountIcon',
		chip: true,
	},
	{
		key: 'Date de naissance',
		value: '24/09/1970',
		icon: 'calendarIcon',
	},
]

const itemsAction = ref([
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
])

const itemsHtml = [
	{
		key: 'Nom',
		value: 'Dupont'
	},
	{
		key: 'Prénom',
		value: 'Paul'
	},
	{
		key: 'Adresse',
		value: '<b>50 Avenue du Professeur André Lemierre</b><br>75020 Paris'
	}
]

const updateBirthdate = (index: number) => {
	itemsAction.value[index].value = '25/09/1970'
}
</script>

<template>
	<DataList :items="items" />
	<br/>
	<DataList
		:items="items"
		row
	/>
	<br/>
	<DataList
		:items="items"
		list-title="Informations personnelles"
	/>
	<br/>
	<DataList
		:items="itemsAction"
		:icons="icons"
		@click:item-action="updateBirthdate"
	/>
	<br/>
	<DataList
		:items="itemsHtml"
		item-width="auto"
		render-html-value
	/>
	<br/>
	<DataList
		:items="items"
		:items-number-loading="3"
		loading
		list-title="Titre"
		heading-loading
	/>
	<br/>
	<DataList :items="items">
			<template #title>
				<h3 class="text-subtitle-1 text-primary font-weight-bold">
					Liste de données
				</h3>
				<p class="text-subtitle-2 mb-3">
					Informations complémentaires
				</p>
			</template>
	</DataList>
</template>
