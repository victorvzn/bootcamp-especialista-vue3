<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="container-fluid">
    <ul>
      <li>
        <strong>Listado de Heroes con Vue 3</strong>
      </li>
    </ul>

    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/login">Login</RouterLink>
      </li>
      <li>
        <RouterLink to="/register">Register</RouterLink>
      </li>
      <li>
        <RouterLink to="/login">Logout</RouterLink>
      </li>
    </ul>
  </nav>
</template>