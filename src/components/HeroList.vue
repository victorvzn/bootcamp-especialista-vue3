<script setup>
import { ref } from 'vue'

import IconGenderMale from '../components/icons/otro/IconGenderMale.vue'
import IconGenderFemale from '@/components/icons/IconGenderFemale.vue'

import ModalBase from '@/components/shared/ModalBase.vue'

const page = ref(1)
const limit = ref(4)
const count = ref(100)
const isOpenModal = ref(false)
const selectedHero = ref(null)
const query = ref('')

// Vue 2
// export default { 
//   props: {
//     heroes: {
//       type: String,
//       required: true
//     }
//   }
// }

defineProps({
  heroes: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['onPage', 'onSearch'])

const firstPage = () => {
  if (page.value === 1) return

  page.value = 1
  
  emit('onPage', page.value)
}

const nextPage = () => {
  const lastPage = count.value / limit.value

  if (page.value >= lastPage) return

  page.value = page.value + 1
  
  emit('onPage', page.value)
}

const prevPage = () => {
  if (page.value === 1) return

  page.value = page.value - 1
  
  emit('onPage', page.value)
}

const lastPage = () => {
  const lastPage = count.value / limit.value // 100 / 4 = 25 pages

  if (page.value === lastPage) return

  page.value = lastPage

  emit('onPage', page.value)
}

const handleShowModal = (imageUrl) => {
  isOpenModal.value = !isOpenModal.value
  selectedHero.value = imageUrl
}
</script>

<template>
  <input
    type="text"
    placeholder="Search by name"
    v-model="query"
    @keyup="emit('onSearch', query)"
  />

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
          <img
            width="156"
            height="88"
            :src="hero.image_screen_url"
            @click="handleShowModal(hero)"
          />
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
    </tbody>
  </table>

  <div class="pagination">
    <button @click="firstPage">First</button>
    <button @click="prevPage">Previous</button>
    <button disabled class="contrast outline">{{ page }} of {{ count / limit }}</button>
    <button @click="nextPage">Next</button>
    <button @click="lastPage">Last</button>
  </div>

  <ModalBase
    :title="`Selected hero ${selectedHero?.name}`"
    :open="isOpenModal"
    @onClose="handleShowModal">
    <img :src="selectedHero?.image_screen_large_url" />
  </ModalBase>
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

.pagination {
  display: flex;
  gap: 1rem;
}

.pagination div {
  width: 100px;
}
</style>