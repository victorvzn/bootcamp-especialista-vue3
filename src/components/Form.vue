<script setup>
import { ref, watch } from 'vue'
import { createHero, updateHero } from '@/services/heroes'

import { createToaster } from "@meforma/vue-toaster"

const toaster = createToaster()

const props = defineProps({
  hero: {
    type: Object,
    default: {}
  }
})

const emit = defineEmits(['onRefreshAfterUpdate'])

watch(() => props.hero, (newHero, oldHero) => {
  console.log(newHero, oldHero)

  formData.value = {
    id: newHero.id,
    name: newHero.name,
    realName: newHero.real_name,
    gender: newHero.gender,
    birth: newHero.birth,
  }
})

const formData = ref({
  id: '',

  name: '',
  realName: '',
  gender: '',
  birth: '',

  aliases: 'aliases',
  deck: 'deck description',
  image_screen_large_url: 'url_large',
  image_screen_url: 'url'
})

const handleForm = async (event) => {
  // TODO: Limpiar el formulario después de crear o actualizar
  // TODO: Actualizar la lista de heroes después de actualizar y permanecer en la misma página

  try {

    const newHero = formData.value

    newHero.gender = Number(newHero.gender)

    newHero['real_name'] = newHero.realName

    delete newHero.realName

    const isANewHero = !Boolean(newHero.id)

    console.log(isANewHero, newHero.id)

    if (isANewHero) {
      const res = await createHero({ form: newHero })

      if (res) {
        toaster.success(`Se creó el heroe correctamente`);
      }
    } else {
      console.log('Updating...')

      const res = await updateHero({ form: newHero })

      if (res) {
        toaster.success(`Se actualizó el heroe correctamente`);
      }

      emit('onRefreshAfterUpdate')
    }

    formData.value = {
      id: '',

      name: '',
      realName: '',
      gender: '',
      birth: '',

      aliases: 'aliases',
      deck: 'deck description',
      image_screen_large_url: 'url_large',
      image_screen_url: 'url'
    }

    // DONE: Validar la respuesta y mostrar un mensaje de exito o de error
  } catch (error) {
    console.log(error)
    
    toaster.error(`Hubo un error, intentalo denuevo más tarde`);
  }
}
</script>

<template>
  <h2>New Hero</h2>

  <pre>{{ hero }}</pre>

  <form @submit.prevent="handleForm">
    <label for="">
      Name
      <input
        type="text"
        placeholder="Ex. Spiderman"
        required
        v-model="formData.name"
      />
    </label>
    <label for="">
      Real Name
      <input
        type="text"
        placeholder="Ex. Spiderman"
        required
        v-model="formData.realName"
      />
    </label>
    <label for="">
      Gender
      <select v-model="formData.gender">
        <option value="">Select a gender...</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="0">Other</option>
      </select>
    </label>
    <label>
      Birth
      <input type="date" v-model="formData.birth" />
    </label>
    <button type="submit">Save</button>

  </form>
</template>