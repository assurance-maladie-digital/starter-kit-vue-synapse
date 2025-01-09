<script setup lang="ts">
	import { ref } from 'vue'
	import { HeaderBurgerMenu, HeaderBar, HeaderMenuSection, HeaderMenuItem, HeaderSubMenu } from '@cnamts/synapse'

	const components = {
		structure: [
			{
				label: 'HeaderBar',
				to: '/header-bar',
			},
			{
				label: 'FooterBar',
				to: '/footer-bar',
			},
			{
				label: 'SubHeader',
				to: '/sub-header',
			},
			{
				label: 'HeaderToolbar',
				to: '/header-toolbar',
			},
			{
				label: 'HeaderLoading',
				to: '/header-loading',
			},
		],
		layout: [
			{
				label: 'PageContainer',
				to: '/page-container',
			},
		],
		Navigation: [
			{
				label: 'SocialMediaLinks',
				to: '/social-media-links',
			},
			{
				label: 'SkipLink',
				to: '/skip-link',
			},
			{
				label: 'ContextualMenu',
				to: '/contextual-menu',
			},
			{
				label: ' ExternalLinks',
				to: '/external-links',
			}
		],
		boutons: [
			{
				label: 'BackBtn',
				to: '/back-btn',
			},
			{
				label: 'BackToTopBtn',
				to: '/back-to-top-btn',
			},
			{
				label: 'CopyBtn',
				to: '/copy-btn',
			},
			{
				label: 'LangBtn',
				to: '/lang-btn',
			},
			{
				label: 'DownloadBtn',
				to: '/download-btn',
			},
			{
				label: 'FranceConnectBtn',
				to: '/france-connect-btn',
			},
			{
				label: 'UserMenuBtn',
				to: '/user-menu-btn',
			},
		],
		formulaires: [
			{
				label: 'SyTextField',
				to: '/sy-text-field',
			},
			{
				label: 'SySelect',
				to: '/sy-select',
			},
			{
				label: 'SyInputSelect',
				to: '/sy-input-select',
			},
			{
				label: 'SyBtnSelect',
				to: '/sy-btn-select',
			},
			{
				label: 'NirField',
				to: '/nir-field',
			},
			{
				label: 'PhoneField',
				to: '/phone-field',
			},
		],
		templates: [
			{
				label: 'ErrorPage',
				to: '/error-page',
			},
			{
				label: 'MaintenancePage',
				to: '/maintenance-page',
			},
			{
				label: 'NotFoundPage',
				to: '/not-found-page',
			},
			{
				label: 'CookieBanner',
				to: '/cookie-banner',
			}
		],
		donnees: [
      {
        label: 'Logo',
        to: '/logo',
      },
      {
        label: 'LogoBrandSection',
        to: '/logo-brand-section',
      },
      {
        label: 'CollapsibleList',
        to: '/collapsible-list',
      },
		],
		feedback: [
			{
				label: 'SyAlert',
				to: '/sy-alert',
			},
		]
	}

	const menuOpen = ref(false)
</script>

<template>
	<HeaderBar
		service-title="Titre du service"
		service-sub-title="Description du service"
	>
		<template #menu>
			<HeaderBurgerMenu v-model="menuOpen">
				<HeaderMenuSection>
					<HeaderMenuItem
						@click="menuOpen = false"
					>
						<NuxtLink
							to="/home"
						>
							Accueil
						</NuxtLink>
					</HeaderMenuItem>
					<HeaderMenuItem
						@click="menuOpen = false"
					>
						<NuxtLink
							to="/test-inva"
						>
							Inva
						</NuxtLink>
					</HeaderMenuItem>
					<HeaderMenuItem
						v-for="(items, category) in components"
						:key="category"
					>
						<HeaderSubMenu>
							<template #title>
								<span class="menu-category">
									{{ category }}
								</span>
							</template>
							<HeaderMenuSection>
								<HeaderMenuItem
									v-for="item in items"
									:key="item.label"
									@click="menuOpen = false"
								>
									<NuxtLink
										:to="item.to"
									>
										{{ item.label }}
									</NuxtLink>
								</HeaderMenuItem>
							</HeaderMenuSection>
						</HeaderSubMenu>
					</HeaderMenuItem>
				</HeaderMenuSection>
			</HeaderBurgerMenu>
		</template>
	</HeaderBar>
</template>

<style lang="scss" scoped>
.menu-category {
	text-transform: capitalize;
}
</style>
