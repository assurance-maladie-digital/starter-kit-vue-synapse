<script setup lang="ts">
import { ref } from 'vue'
import { SyBtnSelect } from '@cnamts/synapse'
import { mdiAccount } from '@mdi/js'

const model = ref(null)
const items = ['Option 1', 'Option 2', 'Option 3']
const menuItems = [
	{ customText: 'Choix 1', customValue: '1' },
	{ customText: 'Choix 2', customValue: '2' },
]
const primaryInfo = 'Mes options'

const options = {
	menu: { height: '200px' },
	btn: { variant: 'outlined', textColor: 'primary', color: 'primary' },
	list: { dense: true, textColor: 'primary' },
}
</script>

<template>
	Option sélectionnée: {{ model }}

	<br/><br/>

	<SyBtnSelect
		v-model="model"
		:menu-items="items"
	/>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
	/>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
		is-mobile-view
	/>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
	>
		<template #prepend-icon>
			<VIcon :icon="mdiAccount" color="secondary" />
		</template>
	</SyBtnSelect>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
	>
		<template #append-icon>
			<VIcon :icon="mdiAccount" color="secondary" />
		</template>
	</SyBtnSelect>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
		icon-only
	>
		<template #prepend-icon>
			<VIcon :icon="mdiAccount" color="secondary" />
		</template>
	</SyBtnSelect>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
	>
		<template #footer-list-item>
			<VListItem @click="console.log('logout')">
				<VListItemTitle>Logout</VListItemTitle>
			</VListItem>
		</template>
	</SyBtnSelect>

	<br/><br/>

	<SyBtnSelect
		text-key="customText"
		value-key="customValue"
		:menu-items="menuItems"
	>
		<template #prepend-icon>
			<VIcon :icon="mdiAccount" />
		</template>
	</SyBtnSelect>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
	>
		<template #prepend-icon>
			<VIcon :icon="mdiAccount" />
		</template>
		<template #footer-list-item>
			<VListItem @click="console.log('logout')">
				<VListItemTitle>Se déconnecter</VListItemTitle>
			</VListItem>
		</template>
	</SyBtnSelect>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
	>
		<template #prepend-icon>
			<VIcon
				:icon="mdiAccount"
				class="mr-2"
				color="red"
			/>
		</template>
	</SyBtnSelect>

	<br/><br/>

	<SyBtnSelect
		:primary-info="primaryInfo"
		:menu-items="items"
		:options="options"
	>
		<template #prepend-icon>
			<VIcon :icon="mdiAccount" />
		</template>
	</SyBtnSelect>
</template>
