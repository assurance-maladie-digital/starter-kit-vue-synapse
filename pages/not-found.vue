<template>
	<div>
		<NotFoundPage :key="$route.fullPath" class="mb-6" />
		<PageContainer size="m" spacing="pa-0 pb-8">
			<VBtn color="primary" @click="setSupportId">
				Afficher l’identifiant de support
			</VBtn>
		</PageContainer>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PageContainer, NotFoundPage } from '@cnamts/synapse'

export default defineComponent({
	components: {
		PageContainer,
		NotFoundPage,
	},
	methods: {
		setSupportId(): void {
			this.$router.push({
				path: this.$route.path,
				query: {
					support_id: '1178926558455813315',
				},
			})
		},
	},
})
</script>
