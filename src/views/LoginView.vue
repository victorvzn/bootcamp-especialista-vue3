<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth';

import { useRouter } from 'vue-router';

const {
  getLoading,
  getUser,
  getIsAuth,
  login,
} = useAuthStore()

const router = useRouter()

const form = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  const email = form.value.email
  const password = form.value.password

  login(email, password)
    .then(() => router.push({ name: 'home' }))
}
</script>

<template>
  <VContainer class="d-flex justify-center">
    <VSheet width="400">
      <h2 class="mb-2">Login</h2>
      - {{ getIsAuth }} -
      - {{ getLoading }} -
      - {{ getUser }} -
      <VForm @submit.prevent="handleLogin">
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
        <v-btn type="submit" block class="mt-2" color="primary">Login</v-btn>
        </VForm>
    </VSheet>
  </VContainer>
</template>