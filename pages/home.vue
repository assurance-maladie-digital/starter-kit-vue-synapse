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
			<v-col cols="12" md="4">
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
			<v-col cols="12" md="4">
				<v-card color="grey-lighten-4" class="mx-auto">
					<v-card-title>Exemple de composant DS</v-card-title>
					<v-card-item>
						<BackBtn to="/home" />
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
			<v-col cols="12" md="4">
				<v-card color="grey-lighten-4" class="mx-auto">
					<v-card-title>Test des stores</v-card-title>
					<v-card-item>
						<div>Compteur: {{ counterStore?.count }}</div>
						<div
							class="d-flex flex-wrap align-center justify-center"
						>
							<v-btn
								color="primary"
								class="ma-2"
								@click="counterStore?.increment"
							>
								Incrémenter
							</v-btn>
							<v-btn
								color="primary"
								class="ma-2"
								@click="counterStore?.decrement"
							>
								Décrémenter
							</v-btn>
							<v-btn
								color="primary"
								class="ma-2"
								@click="counterStore?.reset"
							>
								Réinitialiser
							</v-btn>
						</div>
					</v-card-item>
					<v-card-item>
						<div>
							Notification:
							{{ notificationStore?.notificationPayload }}
						</div>
						<div
							class="d-flex flex-wrap align-center justify-center"
						>
							<v-btn
								color="primary"
								class="ma-2"
								@click="createNotification"
							>
								Créer une notification
							</v-btn>
							<v-btn
								color="primary"
								class="ma-2"
								@click="removeNotification"
							>
								Supprimer une notification
							</v-btn>
						</div>
					</v-card-item>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BackBtn } from '@cnamts/synapse-bridge'
import { useCounterStore } from '~/stores/counter'
import { useNotificationStore } from '~/stores/notifications'

export default defineComponent({
	components: {
		BackBtn,
	},
	data() {
		return {
			counterStore: useCounterStore(),
			notificationStore: useNotificationStore(),
		}
	},
	methods: {
		createNotification() {
			const payload = {
				message: 'Notification de test',
				type: 'success',
			}
			this.notificationStore.create(payload)
		},
		removeNotification() {
			this.notificationStore.remove()
		},
	},
})
</script>
