<script lang="ts" setup>
import { NirField } from '@cnamts/synapse'
import { ref } from 'vue'

const value = ref('')
const nirFieldRef = ref() // Référence Vue pour accéder au composant enfant

const handleSubmit = () => {
	// Appeler la méthode exposée validateOnSubmit via la référence
	const isValid = nirFieldRef.value?.validateOnSubmit()
	if (!isValid) {
		alert('Corrigez les erreurs avant de soumettre !')
	}
	else {
		alert('Formulaire soumis avec succès !')
	}
}
</script>

<template>
	{{ value }}
	<nav class="d-flex flex-column mx-4 my-4">
		<span>Nir Valide: 2 94 03 75 120 005 clef: 91</span>
		<span>Nir Valide Reunion: 1 75 06 97 411 585 clef:43</span>
		<span>Nir Invalide: 1854345012345 56</span>
	</nav>
	<form
		class="mx-16 my-6"
		@submit.prevent="handleSubmit"
	>
		<NirField
			v-model="value"
			:required="false"
			numberLabel="Numéro de sécurité sociale"
			keyLabel="Clé"
			:displayKey="true"
		/>
		<button type="submit">
			Soumettre
		</button>
	</form>

	<br/>

	<NirField
		v-model="value"
		:required="true"
		numberLabel="Numéro de sécurité sociale"
		keyLabel="Clé"
		:displayKey="true"
	/>

	<br/>

	<NirField
		v-model="value"
		:required="false"
		numberLabel="Numéro de sécurité sociale"
		keyLabel="Clé"
		:displayKey="false"
	/>

	<br/>

	<NirField
		v-model="value"
		:required="false"
		numberLabel="Numéro de sécurité sociale"
		keyLabel="Clé"
		:displayKey="true"
		:customNumberRules="[{ type: 'minLength', options: { length: 10, ignoreSpace: true, message: 'Le numéro de sécurité sociale doit avoir au moins 10 caractères.', successMessage: 'Le numéro de sécurité sociale a une longueur valide.' } }]"
		:customKeyRules="[{ type: 'minLength', options: { length: 1, message: 'La clé doit avoir au moins 1 caractère.', successMessage: 'La clé a une longueur valide.' } }]"
	/>

	<br/>

	<NirField
		v-model="value"
		:required="false"
		numberLabel="Numéro de sécurité sociale"
		keyLabel="Clé"
		:displayKey="true"
		nirTooltip="Ceci est un tooltip pour le champs numéro de sécurité sociale"
	/>

	<br/>

	<NirField
		v-model="value"
		:required="false"
		numberLabel="Numéro de sécurité sociale"
		keyLabel="Clé"
		:displayKey="true"
		keyTooltip="Ceci est un tooltip pour la clef du numéro de sécurité sociale"
	/>
</template>
