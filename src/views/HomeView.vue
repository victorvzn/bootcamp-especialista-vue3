<script setup>
import { ref, onBeforeMount } from 'vue'

import Heading from '@/components/Heading.vue'
import HeroList from '@/components/hero-list/HeroList.vue'
import Form from '@/components/Form.vue'

import HeroFilter from '@/components/HeroFilter.vue'

import { fetchHeroes } from '@/services/heroes'

const heroes = ref([])
const query = ref('')
const genderFilter = ref('')
const page = ref(1)
const heroSelected = ref(null)

const handlePage = async (value) => {
  page.value = value
  console.log(111, page.value)
  heroes.value = await fetchHeroes({ page: value, limit: 4, name: query.value, gender: genderFilter.value })
}

const hadleSearchByName = async (name) => {
  console.log({ name })
  query.value = name
  heroes.value = await fetchHeroes({ page: 1, limit: 4, name, gender: genderFilter.value })
}

const handleFilterByGender = async (gender) => {
  console.log(gender)
  genderFilter.value = gender
  heroes.value = await fetchHeroes({ page: page.value, limit: 4, name: query.value, gender })
}

const handleRefresh = async (page) => {
  heroes.value = await fetchHeroes({
    page, limit: 4, name: query.value, gender: genderFilter.value
  })
}

const handleUpdateHero = async (hero) => {
  heroSelected.value = hero
}

const handleRefreshAfterUpdate = async () => {
  heroes.value = await fetchHeroes({
    page: page.value, limit: 4, name: query.value, gender: genderFilter.value
  })
}

onBeforeMount(async () => {
  heroes.value = await fetchHeroes()
})
</script>

<template>
  <Heading
    title="Super Heroes"
  />

  <HeroFilter
    @onSearch="hadleSearchByName"
    @onFilter="handleFilterByGender"
  />

  <div class="grid">
    <div>
      <HeroList
        :currentPage="page"
        :heroes="heroes"
        @onPage="handlePage"
        @onRefresh="handleRefresh"
        @onUpdateHero="handleUpdateHero"
      />
    </div>
    <div>
      <Form :hero="heroSelected" @onRefreshAfterUpdate="handleRefreshAfterUpdate" />
    </div>
  </div>
</template>