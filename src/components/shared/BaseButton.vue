<script setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  label: {
    type: String,
    default: 'Base Button'
  },
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <div class="base-button">
    <button v-bind="$attrs">{{ label }}</button>
  </div>
</template>