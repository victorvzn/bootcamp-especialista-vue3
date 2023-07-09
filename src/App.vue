<script setup>
import { ref, onBeforeMount } from 'vue'

import Header from './components/Header.vue'
import Heading from './components/Heading.vue'
import HeroList from './components/HeroList.vue'

import { fetchHeroes } from './services/heroes'

const heroes = ref([])

const handlePage = async (value) => {
  // console.log(value)
  heroes.value = await fetchHeroes({ page: value, limit: 4 })
}

onBeforeMount(async () => heroes.value = await fetchHeroes())
</script>

<template>
  <Header />

  <main class="container">
    <Heading
      title="Super Heroes"
    />

    <HeroList :heroes="heroes" @onPage="handlePage" />
  </main>
</template>

