<script setup lang="ts">
import { CopyBtn } from '@cnamts/synapse'
import { mdiContentDuplicate } from '@mdi/js'

const duplicateIcon = mdiContentDuplicate;
const tooltip = 'Texte personalisé'
</script>

<template>
	<div class="d-flex flex-wrap align-center pa-4">
		<p class="mb-0 mr-1">
			Patient n°<b>1970756541</b>
		</p>

		<CopyBtn
			label="Copier le numéro de patient"
			text-to-copy="1970756541"
		/>
	</div>

	<br/>

	<div class="d-flex flex-wrap align-center pa-4">
		<p class="mb-0 mr-1">
			Patient n°<b>1970756541</b>
		</p>

		<CopyBtn
			label="Copier le numéro de patient"
			text-to-copy="1970756541"
			hide-tooltip
		/>
	</div>

	<br/>

	<div class="d-flex flex-wrap align-center pa-4">
		<p class="mb-0 mr-1">
			Patient n°<b>1970756541</b>
		</p>

		<CopyBtn
			label="Copier le numéro de patient"
			text-to-copy="1970756541"
		>
			<template #icon>
				<VIcon :icon="duplicateIcon" />
			</template>
		</CopyBtn>
	</div>

	<br/>

	<div class="d-flex flex-wrap align-center pa-4">
		<p class="mb-0 mr-1">
			Patient n°<b>1970756541</b>
		</p>

		<CopyBtn
			label="Copier le numéro de patient"
			text-to-copy="1970756541"
		>
			<template #tooltip>
				{{ tooltip }}
			</template>
		</CopyBtn>
	</div>
</template>
