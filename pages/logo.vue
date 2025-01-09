<script setup lang='ts'>
import {Logo} from '@cnamts/synapse'
</script>

<template>
	<Logo />
	<br />
	<Logo size="small" />
	<br />
	<Logo size="x-small" />
	<br />
	<Logo hide-signature />
	<br />
	<Logo hide-organism />
	<br />
	<Logo risque-pro />
	<br />
	<Logo avatar />
	<br />
	<VSheet color="primary" class="pa-4">
		<Logo dark />
	</VSheet>
</template>
