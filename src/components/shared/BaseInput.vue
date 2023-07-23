<script setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  label: {
    type: String,
    default: 'Base label'
  }
})
</script>

<template>
  <label for="">
    {{ label }}
    <input
      type="text"
      placeholder="Ex. Spiderman"
      required
    />
  </label>
</template>