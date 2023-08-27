<script setup>
defineProps({
  card: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <v-card width="300">
    <template v-slot:title>
      {{ card?.title }}
    </template>
    <template v-slot:subtitle>
      0 of {{ card?.subtasks.length }} subtasks
    </template>
  </v-card>
</template>