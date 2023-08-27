<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useRoute } from 'vue-router'
import { useBoardStore } from '@/stores/board'

import BaseCard from '@/components/shared/BaseCard.vue'

const useBoard = useBoardStore()
const {
  getColumnsBoardById,
  getCardsBoardByStatus
} = storeToRefs(useBoard)

const route = useRoute()
</script>

<template>
  <div class="d-flex" style="gap:2rem;">
    <VSheet
      class="d-flex flex-column"
      style="gap:1rem;"
      v-for="(column, index) in getColumnsBoardById(route.params.id)"
      :key="index"
    >
      <h2 class="text-subtitle-2 flex">
        <v-badge
          dot
          color="error"
          inline
        ></v-badge>
        {{ column  }} (0)
      </h2>
      *{{ getCardsBoardByStatus(route.params.id, column) }}*
      <BaseCard />
    </VSheet>
</div>
</template>