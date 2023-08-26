<script setup>
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'

import BoardList from '@/components/boards/BoardList.vue'

import { useBoardStore } from '@/stores/board'

const {
  fetchBoards,
} = useBoardStore()

onBeforeMount(() => {
  fetchBoards()
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <BoardList />
      </v-col>
      <v-col>
          <RouterView />
      </v-col>
    </v-row>
  </v-container>
</template>
