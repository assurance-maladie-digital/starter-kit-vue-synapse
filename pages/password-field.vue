<script setup lang="ts">
import { PasswordField } from '@cnamts/synapse'
import { ref } from 'vue'

const password = ref('')
</script>

<template>
	Default
	<PasswordField
		v-model="password"
		:required="false"
		:isValidateOnBlur="true"
	/>
	<br/><br/>
	Required
	<PasswordField
		v-model="password"
		:required="true"
		:isValidateOnBlur="true"
	/>
	<br/><br/>
	Custom rules
	<PasswordField
		v-model="password"
		:required="false"
		:isValidateOnBlur="true"
		:customRules="[
      {
        type: 'minLength',
        options: {
          length: 8,
          message: 'Le mot de passe doit comporter au moins 8 caractères.',
          successMessage: 'Le mot de passe est suffisamment long.'
        }
      },
    ]"
	/>
</template>
