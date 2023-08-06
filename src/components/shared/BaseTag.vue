<script setup>
import { ref } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const baseClass = 'py-3 rounded-md text-center font-bold min-w-[50px] flex justify-center items-center gap-1'
const tagClass = ref(`${baseClass} bg-${props.color}-400/20 text-${props.color}-400`)
</script>

<template>
  <div :class="tagClass">
    <slot />
  </div>
</template>
