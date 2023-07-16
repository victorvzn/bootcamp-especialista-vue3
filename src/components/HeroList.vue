<script setup>
import { ref } from 'vue'

import IconGenderMale from '../components/icons/otro/IconGenderMale.vue'
import IconGenderFemale from '@/components/icons/IconGenderFemale.vue'

import ModalBase from '@/components/shared/ModalBase.vue'
import Pagination from '@/components/shared/Pagination.vue'

import { deleteHero } from '@/services/heroes.js'

import { createToaster } from "@meforma/vue-toaster"

const toaster = createToaster()

const page = ref(1)
const limit = ref(4)
const count = ref(75)
const isOpenModal = ref(false)
const selectedHero = ref(null)

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
  currentPage: {
    type: Number,
    default: 1
  },
  heroes: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['onPage', 'onSearch', 'onFilter', 'onRefresh', 'onUpdateHero'])

const handleShowModal = (imageUrl) => {
  isOpenModal.value = !isOpenModal.value
  selectedHero.value = imageUrl
}

const handleRemoveHero = async (hero) => {
  try {
    // operaciones sobre el api con el metodo DELETE
    const res = await deleteHero({ id: hero.id })

    // DONE: Validar la respuesta del servidor y mostrar un mensaje de exito o de error

    if (res) {
      toaster.success(`Se eliminó correctamente`);

      emit('onRefresh', page.value)
    }

  } catch (error) {
    console.log(error)
    
    toaster.error(`Hubo un error, intentalo denuevo más tarde`);
  }
}

const handleOnPage = (page) => {
  emit('onPage', page)
}

const handleUpdateHero = async (hero) => {
  // DONE: Ejecutar la accion para actualizar un registro
  // DONE: Validar la respuesta del servidor y mostrar un mensaje de exito o de error

  emit('onUpdateHero', hero)
}
</script>

<template>
  <table role="grid">
    <thead> 
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Actions</th>
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
        <th>
          <button role="button" @click="handleRemoveHero(hero)">❌</button>
          <button role="button" @click="handleUpdateHero(hero)">✏</button>
        </th>
      </tr>
    </tbody>
  </table>

  {{ page }}

  <Pagination
    :page="currentPage"
    :count="count.value"
    :limit="limit.value"
    @onPage="handleOnPage"
  />

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