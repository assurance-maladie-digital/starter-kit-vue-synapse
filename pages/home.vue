<template>
	<div>
		<h1 class="text-primary">
			{{ $config && $config.public ? $config.public.title : 'Accueil' }}
		</h1>
		<div class="mt-6 mb-12 d-flex align-center justify-center">
			<VCard width="695" variant="tonal" class="d-flex">
				<img src="/starter-kit.svg" alt="Starter kit" />
			</VCard>
		</div>
		<v-row justify="center">
			<v-col cols="12" md="6">
				<v-card color="grey-lighten-4" class="mx-auto">
					<v-card-title>Exemple de composant Nuxt</v-card-title>
					<v-card-item>
						<HelloWorld
							:msg="
								$config && $config.public
									? $config.public.message
									: 'Bonjour'
							"
						/>
					</v-card-item>
				</v-card>
			</v-col>
			<v-col cols="12" md="6">
				<v-card color="grey-lighten-4" class="mx-auto">
					<v-card-title>Exemple de composant DS</v-card-title>
					<v-card-item>
						<BackBtn to="/home" />
						<br />
						<VBtn color="secondary">Bouton secondaire</VBtn>
						<br />
						<br />
						<a
							href="https://digital-design-system.netlify.app/demarrer/introduction/"
							target="_blank"
						>
							Voir la documentation des composants du Design
							System.
						</a>
					</v-card-item>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BackBtn } from '@cnamts/synapse'

export default defineComponent({
	components: {
		BackBtn,
	}
})
</script>
