<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="headings">
    <h2>{{ title }}</h2>
    <h3 v-if="subtitle">{{ subtitle }}</h3>
  </div>
</template>