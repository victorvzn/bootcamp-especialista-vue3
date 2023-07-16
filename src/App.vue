<script setup>
import { ref, onBeforeMount } from 'vue'

import Header from './components/Header.vue'
import Heading from './components/Heading.vue'
import HeroList from './components/HeroList.vue'
import Form from '@/components/Form.vue'

import { fetchHeroes } from './services/heroes'

const heroes = ref([])

const query = ref('')
const genderFilter = ref('')
const page = ref(1)

const handlePage = async (value) => {
  // console.log(value)
  page.value = value
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

onBeforeMount(async () => {
  heroes.value = await fetchHeroes()
})
</script>

<template>
  <Header />

  <main class="container-fluid">
    <Heading
      title="Super Heroes"
    />

    <div class="grid">
      <div>
        <HeroList
          :heroes="heroes"
          @onPage="handlePage"
          @onSearch="hadleSearchByName"
          @onFilter="handleFilterByGender"
        />
      </div>
      <div>
        <Form />
      </div>
    </div>

    </main>
</template>

