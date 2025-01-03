<script setup lang="ts">
import { HeaderToolbar } from '@cnamts/synapse'

const leftMenu = [
	{
		title: 'Titre 1',
		href: 'https://www.ameli.fr',
		openInNewTab: true,
	},
	{
		title: 'Titre 2',
		href: 'https://www.ameli.fr',
		openInNewTab: true,
	},
	{
		title: 'Titre 3',
		href: 'https://www.ameli.fr',
		openInNewTab: true,
	},
]

const rightMenu = [
	{
		title: 'Titre 4',
		href: 'https://www.ameli.fr',
		openInNewTab: true,
	},
	{
		title: 'Titre 5',
		href: 'https://www.ameli.fr',
		openInNewTab: true,
	},
	{
		title: 'Titre 6',
		href: 'https://www.ameli.fr',
		openInNewTab: true,
	},
]
</script>

<template>
	<HeaderToolbar />

	<br/>

	<HeaderToolbar>
		<template #left-menu>
			<ul>
				<li v-for="item in leftMenu">
					<a :href="item.href" target="_blank">
						{{ item.title }}
					</a>
				</li>
			</ul>
		</template>
		<template #right-menu>
			<ul>
				<li v-for="item in rightMenu">
					<a :href="item.href" target="_blank">
						{{ item.title }}
					</a>
				</li>
			</ul>
		</template>
	</HeaderToolbar>
</template>
