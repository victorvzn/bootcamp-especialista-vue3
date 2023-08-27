<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth';

import { useRouter } from 'vue-router';

const { register } = useAuthStore()

const router = useRouter()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const handleRegister = async () => {
  const { email, password } = form.value

  await register(email, password)

  router.push({ name: 'login' })
}
</script>

<template>
  <VContainer class="d-flex justify-center">
    <VSheet width="400">
      <h2 class="mb-2">Register</h2>
      <VForm @submit.prevent="handleRegister">
        <VTextField
          type="email"
          label="First Name"
          placeholder="Jhon"
          v-model="form.firstName"
        />
        <VTextField
          label="Last Name"
          placeholder="Doe"
          v-model="form.lastName"
        />
        <VTextField
          label="Email"
          placeholder="jhondoe@gmail.com"
          v-model="form.email"
        />
        <VTextField
          type="password"
          label="Password"
          placeholder="supersecret"
          v-model="form.password"
        />
        <v-btn type="submit" block class="mt-2" color="primary">Register</v-btn>
      </VForm>
    </VSheet>
  </VContainer>
</template>