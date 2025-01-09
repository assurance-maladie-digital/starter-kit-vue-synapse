<script lang="ts" setup>
import { ExternalLinks } from '@cnamts/synapse'

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
</script>

<template>
	<div style="height: 60dvh;">
		<ExternalLinks
		  :items="items"
		  position="bottom left"
		  nudge-bottom="30px"
		  />
		  <ExternalLinks
			  :items="items"
			  position="top right"
			  nudge-bottom="30px"
		  />
	</div>
</template>
