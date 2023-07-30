<script setup>
import { ref } from 'vue'

import IconGenderMale from '@/components/icons/otro/IconGenderMale.vue'
import IconGenderFemale from '@/components/icons/IconGenderFemale.vue'
import ModalBase from '@/components/shared/ModalBase.vue'

import { deleteHero } from '@/services/heroes.js'

import { createToaster } from "@meforma/vue-toaster"

const toaster = createToaster()

const isOpenModal = ref(false)
const selectedHero = ref(null)

const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  heroes: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['onRefresh', 'onUpdateHero'])

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

      emit('onRefresh', props.page)
    }

  } catch (error) {
    console.log(error)
    
    toaster.error(`Hubo un error, intentalo denuevo más tarde`);
  }
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
          <div class="actions">
            <RouterLink :to="{ name: 'heroes-detail', params: { id: hero.id } }" role="button">👁</RouterLink>
            <button role="button" @click="handleRemoveHero(hero)">❌</button>
            <button role="button" @click="handleUpdateHero(hero)">✏</button>
          </div>
        </th>
      </tr>
    </tbody>
  </table>

  <ModalBase
    :title="`Selected hero ${selectedHero?.name}`"
    :open="isOpenModal"
    @onClose="handleShowModal">
    <img :src="selectedHero?.image_screen_large_url" />
  </ModalBase>
</template>

<style scoped>
.actions {
  display: flex;
  align-items: start;
  gap: .5rem;
}
</style>