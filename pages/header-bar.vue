<script setup lang="ts">
import { HeaderBar, SubHeader, UserMenuBtn, HeaderBurgerMenu } from '@cnamts/synapse'

import { VBtn } from 'vuetify/components'
import { mdiMagnify, mdiAccountCircleOutline } from '@mdi/js'

const listItems = [
	{
		text: 'Mon compte',
		value: 'account',
		link: '/account',
	},
	{
		text: 'Déconnexion',
		value: 'logout',
		link: '/logout',
	},
]
</script>

<template>
	<HeaderBar
		service-title="Synapse"
		service-subtitle="Design System"
	/>

	<br/>

	<HeaderBar
		service-title="Synapse"
		service-subtitle="Design System"
	>
		<template #header-side>
			<div class="d-flex justify-center h-100 ga-4 pr-4">
				<VBtn
					variant="text"
					:prepend-icon="mdiMagnify"
					color="primary"
				>
					Rechercher
				</VBtn>
				<VBtn
					color="primary"
					:prepend-icon="mdiAccountCircleOutline"
				>
					Login
				</VBtn>
			</div>
		</template>
	</HeaderBar>

	<br/>

	<HeaderBar>
		<template #logo-brand-content>
			<svg data-v-7f5c1754="" width="22" height="64" fill="#0c419a" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 64" class="vd-divider"><path data-v-7f5c1754="" d="M14.3 49.3c-.2 0-.4-.2-.4-.4V14.2c0-.2.2-.4.4-.4.3 0 .5.2.5.4v34.7c0 .2-.2.4-.5.4Z"></path></svg>
			<img
				src="/ameli.svg"
				alt="Logo de ameli.fr"
			>
		</template>
	</HeaderBar>

	<br/>

	<HeaderBar>
		<template #logo-brand-content>
			<svg data-v-a3ce97de="" width="22" height="auto" fill="#0c419a" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 64" class="vd-divider"><path data-v-a3ce97de="" d="M14.3 49.3c-.2 0-.4-.2-.4-.4V14.2c0-.2.2-.4.4-.4.3 0 .5.2.5.4v34.7c0 .2-.2.4-.5.4Z"></path></svg>
			<div>
				<div>
					<div style="font-size: 1.15rem;">Brand <span style="color: red">custom</span></div>
					<div style="font-size: 0.75rem;">un service de l'assurance maladie</div>
				</div>
			</div>
		</template>
	</HeaderBar>

	<br/>

	<HeaderBar>
		<template #append>
			<SubHeader
				title-text="Paul Dupont"
				sub-title-text="1 69 08 75 125 456 75"
			/>
		</template>
	</HeaderBar>

	<br/>

	<HeaderBar>
		<template #append>
			<div style="height: 26px; background-color: #0c419a;"></div>
		</template>
	</HeaderBar>

	<br/>

	<HeaderBar>
		<template #header-side>
			<UserMenuBtn
				full-name="Édith Cartier"
				:menu-items="listItems"
				class="mr-4"
			/>
		</template>
	</HeaderBar>

	<br/>

	<HeaderBar>
		<template #menu>
			<HeaderBurgerMenu>
				<p>lorem ipsum</p>
			</HeaderBurgerMenu>
		</template>
	</HeaderBar>
</template>
