<script setup>
</script>

<template>
  <VContainer class="d-flex justify-center">
    <VSheet width="400">
      <h2 class="mb-2">Login</h2>
      <VForm>
        <VTextField
        label="Email"
        placeholder="jhondoe@gmail.com"
        />
        <VTextField
        type="password"
        label="Password"
        placeholder="supersecret"
        />
        <v-btn type="submit" block class="mt-2" color="primary">Login</v-btn>
      </VForm>
    </VSheet>
  </VContainer>
</template>