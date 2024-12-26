<script setup lang="ts">
import { UserMenuBtn } from '@cnamts/synapse';
import { ref } from 'vue'

const selected = ref(null)
const menuItems = ref([
	{ text: 'Administration', value: 'Administration' },
	{ text: 'Profil', value: 'Profil' },
	{ text: 'Paramètres', value: 'Paramètres' },
])

const vuetifyOptions = ref({
	menu: { minWidth: '250px' },
	btn: { variant: 'outlined' },
	icon: { color: 'warning' },
	logoutListItem: { class: 'text-warning' },
	logoutIcon: { color: 'warning' },
})

const handleLogout = () => {
	alert('Logout event triggered')
}
</script>

<template>
	<UserMenuBtn :menuItems="menuItems" />

	<br/>

	<UserMenuBtn
		v-model="selected"
		:menuItems="menuItems"
		hide-logout-btn
	/>

	<br/>

	<UserMenuBtn
		v-model="selected"
		:menuItems="menuItems"
		hide-user-icon
	/>

	<br/>

	<UserMenuBtn
		v-model="selected"
		:menuItems="menuItems"
		is-mobile-view
	/>

	<br/>

	<UserMenuBtn
		v-model="selected"
		:menuItems="menuItems"
		fullName="John Doe"
		additionalInformation="Custom information"
	/>

	<br/>

	<UserMenuBtn
		v-model="selected"
		:menuItems="menuItems"
		:vuetify-options="vuetifyOptions"
	/>

	<br/>

	<UserMenuBtn
		v-model="selected"
		:menuItems="menuItems"
		@logout="handleLogout"
	/>
</template>
