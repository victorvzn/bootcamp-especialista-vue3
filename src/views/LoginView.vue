<script setup>
import { ref } from 'vue'
import { createToaster } from "@meforma/vue-toaster"
import { useRouter } from 'vue-router'

import { loginUser } from '@/services/auth';

const toaster = createToaster()

const router = useRouter()

const form = ref({
  email: '',
  password: ''
})

const handleLogin = async (event) => {
  event.preventDefault()

  try {

    const { email, password } = form.value

    const response = await loginUser({ email, password })
    
    const data = await response.json()

    if (response.ok && data.length === 1) {
      localStorage.setItem('auth', true)

      router.push({ name: 'home' })
      
      toaster.success('Login ok!')
    } else {
      toaster.warning('Login unsuccessfull!')
    }
  } catch(err) {
    console.error(err)
    toaster.error('Something is wrong!')
    
    router.push({ name: 'login' })
  }

}
</script>

<template>
  <div class="container">

    <article class="grid mt-100">
      <div></div>
      <div>
        <hgroup>
          <h1>Login</h1>
          <h2>Ingresa tus datos para ingresar</h2>
        </hgroup>

        <form @submit="handleLogin">
          <BaseInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            required
            v-model="form.email"
          />

          <BaseInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            required
            v-model="form.password"
          />

          <BaseButton
            type="submit"
            class="contrast"
            label="Register"
          />
        </form>
      </div>
      <div></div>
    </article>
  </div>
</template>

<style scoped>
.mt-100 {
  margin-top: 100px;
}
</style>