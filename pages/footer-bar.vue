<script setup lang="ts">
import { FooterBar, Logo } from '@cnamts/synapse'
import { CollapsibleList } from '@cnamts/synapse'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import {mdiFacebook, mdiLinkedin, mdiTwitter, mdiYoutube} from "@mdi/js";

const docProps = {
	sitemapRoute: '/',
	cguRoute: '/',
	cookiesRoute: '/',
	legalNoticeRoute: '/',
	a11yStatementRoute: '/',
}

const remboursementItems = [
	{
		text: 'Ce qui est remboursé',
		href: 'https://www.ameli.fr/assure/remboursements/rembourse',
	},
	{
		text: 'Ce qui reste à votre charge',
		href: 'https://www.ameli.fr/assure/remboursements/reste-charge',
	},
	{
		text: 'Être bien remboursé',
		href: 'https://www.ameli.fr/assure/remboursements/etre-bien-rembourse',
	},
]
const healthItems = [
	{
		text: 'Mon espace santé',
		href: 'https://www.ameli.fr/assure/sante/mon-espace-sante',
	},
	{
		text: 'Accomplir les bons gestes',
		href: 'https://www.ameli.fr/assure/sante/bons-gestes',
	},
	{
		text: 'Réagir en cas d’urgence',
		href: 'https://www.ameli.fr/assure/sante/urgence',
	},
	{
		text: 'Télésanté',
		href: 'https://www.ameli.fr/assure/sante/telesante',
	},
]
const { smAndDown } = useDisplay()
const isMobile = computed(() => smAndDown.value)

const items = [
	{
		text: 'Accueil',
		href: '/',
	},
	{
		text: 'Plan du site',
		href: '/sitemap',
	},
	{
		text: 'Conditions générales d\'utilisation',
		href: '/cgu',
	},
	{
		text: 'Aide',
		href: 'https://www.ameli.fr/assure/aide',
		ariaLabel: 'Aide (s’ouvre sur le site ameli.fr)',
		openInNewTab: true,
	},
]

const socialMediaLinks = [
	{
		icon: mdiFacebook,
		name: 'Facebook',
		href: 'https://www.facebook.com',
	},
	{
		icon: mdiTwitter,
		name: 'Twitter',
		href: 'https://www.twitter.com',
	},
	{
		icon: mdiLinkedin,
		name: 'LinkedIn',
		href: 'https://www.linkedin.com',
	},
	{
		icon: mdiYoutube,
		name: 'YouTube',
		href: 'https://youtube.com',
	},
]

const currentYear = new Date().getFullYear()
</script>

<template>
	<FooterBar v-bind="docProps" />

	<br/>

	<FooterBar :link-items="items" />

	<br/>

	<FooterBar :link-items="items">
		<template #prepend>
			<li class="text--secondary my-3 mx-4">
				Texte ajouté
			</li>
		</template>
	</FooterBar>

	<br/>

	<FooterBar :link-items="items">
		<template #append>
			<li class="text--secondary my-3 mx-4">
				{{ currentYear }}
			</li>
		</template>
	</FooterBar>

	<br/>

	<FooterBar
		v-bind="docProps"
	>
		<VRow
			:no-gutters="isMobile"
			class="max-width-none"
		>
			<VCol
				cols="12"
				sm="6"
			>
				<CollapsibleList
					:items="remboursementItems"
					list-title="Remboursement"
					class="theme--dark"
				/>
			</VCol>

			<VCol
				cols="12"
				sm="6"
			>
				<CollapsibleList
					:items="healthItems"
					list-title="Santé"
					class="theme--dark"
				/>
			</VCol>
		</VRow>
	</FooterBar>

	<br/>

	<FooterBar :link-items="items">
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
		<template #logo>
			<Logo
				:risque-pro="true"
				aria-label="Risque Pro"
			/>
		</template>
	</FooterBar>

	<br/>

	<FooterBar
		:link-items="items"
		:social-media-links="socialMediaLinks"
	>
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>

	<br/>

	<FooterBar
		:link-items="items"
		light
	>
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>
