<script setup>
import { ref, onBeforeMount } from 'vue'

import IconGenderMale from './components/icons/IconGenderMale.vue'
import IconGenderFemale from './components/icons/IconGenderFemale.vue'

const BASE_URL = import.meta.env.VITE_API_URL

const heroes = ref([])

const fetchHeroes = async () => {

  const response = await fetch(BASE_URL + '/heroes')

  const data = await response.json()

  return data
}

onBeforeMount(async () => {
  heroes.value = await fetchHeroes()
})

</script>

<template>
  <nav class="container">
    <ul>
      <li>
        <strong>Listado de Heroes con Vue 3</strong>
      </li>
    </ul>
  </nav>

  <main class="container">
    <div class="headings">
      <h2>Super Heroes</h2>
      <h3>¡Elije a tu super hero favorito!</h3>
    </div>

    <table role="grid">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="hero in heroes" :key="hero.id">
          <th>{{ hero.id }}</th>
          <td>
            <img :src="hero.image_screen_url" width="156" height="88" />
          </td>
          <td>
            <div>{{ hero.name }}</div>
            <div>Real name: {{ hero.real_name }}</div>
            <div>Aliases: {{ hero.aliases }}</div>
            <div v-if="hero.birth">Birth: {{ hero.birth }}</div>
          </td>
          <th>
            <IconGenderMale v-if="hero.gender === 1" class="gender--male" />
            <IconGenderFemale  v-else-if="hero.gender === 2" class="gender--female" />
            <span v-else>-</span>
          </th>
        </tr>

        <tr>
          <th>1</th>
          <td>
            <img src="" width="156" height="88" />
          </td>
          <td>
            <div>Hero name</div>
            <div>Real name: ----</div>
            <div>Aliases: ----</div>
            <div>Birth: ----</div>
          </td>
          <td>
            Gender
          </td>
        </tr>
      </tbody>

      <!-- Pagination here -->
    </table>
  </main>
</template>

<style scoped>
.gender--male {
  fill: #60a5fa;
}
.gender--female {
  fill: #fb7185;
}
.gender--none {
  fill: #d7ef1c;
}
</style>
