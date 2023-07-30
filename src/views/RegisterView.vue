<script setup>
import { ref } from 'vue'

const form = ref({
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const handleRegister = (event) => {
  event.preventDefault();
  
  const { fullname, email, password, confirmPassword } = form.value

  

  console.log(form.value)
}
</script>

<template>
  <div class="container">

    <article class="grid mt-100">
      <div></div>
      <div>
        <hgroup>
          <h1>Register</h1>
          <h2>Ingresa tus datos para registrarte</h2>
        </hgroup>

        {{ form }}

        <form @submit="handleRegister">
          <BaseInput
            label="Fullname"
            type="text"
            name="fullname"
            placeholder="Fullname"
            required
            v-model="form.fullname"
          />

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

          <BaseInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            v-model="form.confirmPassword"
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