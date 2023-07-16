<script setup>
import { ref } from 'vue'
import { createHero } from '@/services/heroes'

import { createToaster } from "@meforma/vue-toaster"

const toaster = createToaster()

const formData = ref({
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
  try {

    const newHero = formData.value

    newHero.gender = Number(newHero.gender)

    newHero['real_name'] = newHero.realName

    delete newHero.realName

    console.log(newHero)
    
    const res = await createHero({ form: newHero })

    console.log(res)

    // TODO: Validar la respuesta y mostrar un mensaje de exito o de error

    if (res) {
      toaster.success(`Se guardó correctamente`);
    }
  } catch (error) {
    console.log(error)
    
    toaster.error(`Hubo un error, intentalo denuevo más tarde`);
  }

}
</script>

<template>
  <h2>New Hero</h2>

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

    {{ formData }}
  </form>
</template>