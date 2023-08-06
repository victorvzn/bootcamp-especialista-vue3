<script setup>
import { ref } from 'vue'

// TODO: Convertir este componente a un componente reutilizable
const props =   defineProps({
  color: {
    type: String,
    default: 'red-500'
  }
})

const baseClass = 'rounded-full px-5 py-3 font-semibold  flex items-center gap-4'
const buttonClass = ref(`${baseClass} bg-${props.color} text-white`)
</script>

<template>
  <button
    :class="buttonClass"
  >
    <slot />
  </button>
</template>