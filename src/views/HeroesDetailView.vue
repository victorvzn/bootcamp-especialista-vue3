<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getHeroe } from '@/services/heroes'

const route = useRoute()

const hero = ref(null)

onBeforeMount(async () => {
  const id = route.params.id

  const data = await getHeroe({ id })

  
  hero.value = await data.json()
  console.log(hero.value)
})

</script>

<template>
  <div class="container" v-if="hero">
    <article>
      <header>
        <RouterLink :to="{ name: 'home'}">Back home</RouterLink>
        <br>
        <h2 >{{ hero.name }}</h2>
      </header>
      <img
        :src="hero.image_screen_large_url"
      />
    </article>
  </div>
</template>