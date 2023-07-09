<script setup>
import { ref, onBeforeMount } from 'vue'

import Header from './components/Header.vue'
import Heading from './components/Heading.vue'
import HeroList from './components/HeroList.vue'

import { fetchHeroes } from './services/heroes'

const heroes = ref([])

onBeforeMount(async () => heroes.value = await fetchHeroes())
</script>

<template>
  <Header />

  <main class="container">
    <Heading
      title="Super Heroes"
    />

    <HeroList :heroes="heroes" />
  </main>
</template>

