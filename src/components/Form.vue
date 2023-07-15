<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  realName: '',
  gender: '',
  birth: '',
})

const handleForm = (event) => {
  const newHero = formData.value

  console.log(newHero)
  
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