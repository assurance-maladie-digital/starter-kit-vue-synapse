<script lang="ts" setup>
import { ExternalLinks } from '@cnamts/synapse'
import { mdiArrowTopRight } from '@mdi/js'

const arrowIcon = mdiArrowTopRight

const items = [
  {
    "text": "ameli.fr",
    "href": "https://www.ameli.fr"
  },
  {
    "text": "Github",
    "href": "https://www.github.com"
  },
  {
    "text": "Twitter",
    "href": "https://www.twitter.com"
  }
];

const options = {
	btn: {
		color: 'purple',
	},
	list: {
		density: 'compact',
	},
}
</script>

<template>
	<div style="height: 60dvh;">
		<ExternalLinks
		  :items="items"
		  position="bottom left"
		  nudge-bottom="30px"
		  />
		<ExternalLinks
			position="top left"
			:items="items"
			nudgeTop="50px"
		/>
		  <ExternalLinks
			  :items="items"
			  position="top right"
			  nudge-bottom="30px"
		  />
		<ExternalLinks
			position="top left"
			nudgeTop="100px"
			btn-text="Afficher les liens externes"
			:items="[]"
			:vuetifyOptions="options"
		/>
		<ExternalLinks
			position="top left"
			:items
			nudgeTop="200px"
		>
			<template #link-icon>
				<VIcon color="rgba(0, 0, 0, 0.5)">
					{{ arrowIcon }}
				</VIcon>
			</template>
		</ExternalLinks>
	</div>
</template>
