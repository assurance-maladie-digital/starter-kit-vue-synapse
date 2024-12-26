<script setup lang="ts">
import { SocialMediaLinks } from '@cnamts/synapse'
import { mdiFacebook, mdiLinkedin, mdiTwitter } from '@mdi/js'

const links = [
	{
		icon: mdiLinkedin,
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/company/assurance-maladie/',
	},
	{
		icon: mdiFacebook,
		name: 'Facebook',
		href: 'https://twitter.com/Assur_Maladie',
	},
	{
		icon: mdiTwitter,
		name: 'Twitter',
		href: 'https://twitter.com/Assur_Maladie',
	},
]
</script>

<template>
	<SocialMediaLinks :links="links" />
</template>
