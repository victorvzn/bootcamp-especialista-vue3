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

const genderOptions = ref([
  {
    label: 'Male',
    value: 1
  },
  {
    label: 'Female',
    value: 2
  },
  {
    label: 'Other',
    value: 0
  }
])

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
  <!-- TODO: Hacer que los componentes del formulario y cualquier parte de la app (input, select, buttons) sean reutilizables usando @input, $attrs. Tal como está en los videos del Canvas. Ejemplo: <BaseInput />, <BaseSelect />, <BaseButton />, etc -->
  <h2>New Hero</h2>

  <form @submit.prevent="handleForm">
    <BaseInput
      label="Name"
      placeholder="Ex. Ironman"
      required
      v-model="formData.name"
    />

    <BaseInput
      label="Real Name"
      placeholder="Ex. Spiderman"
      required
      v-model="formData.realName"
    />

    <BaseSelect
      label="Gender"
      v-model="formData.gender"
      :options="genderOptions"
    />

    <BaseInput
      label="Birth"
      type="date"
      required
      v-model="formData.birth"
    />
    
    <BaseButton label="Save" type="submit" />

    <pre>{{ hero }}</pre>
  </form>
</template>