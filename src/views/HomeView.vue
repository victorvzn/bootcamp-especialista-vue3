<script setup>
import { ref, onBeforeMount } from 'vue'

import BaseCard from '@/components/shared/BaseCard.vue'
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
        <div class="d-flex" style="gap:2rem;">
          <VSheet class="d-flex flex-column" style="gap:1rem;">
            <h2 class="text-subtitle-2 flex">
              <v-badge
                dot
                color="error"
                inline
              ></v-badge>
              TODO (4)
            </h2>
          
            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
          </VSheet>
          <VSheet class="d-flex flex-column" style="gap:1rem;">
            <h2 class="text-subtitle-2 flex">
              <v-badge
                dot
                color="error"
                inline
              ></v-badge>
              DOING (4)
            </h2>

            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
          </VSheet>
          <VSheet class="d-flex flex-column" style="gap:1rem;">
            <h2 class="text-subtitle-2 flex">
              <v-badge
                dot
                color="error"
                inline
              ></v-badge>
              DONE (4)
            </h2>

            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
            <BaseCard />
          </VSheet>
          <VSheet color="grey-lighten-4 pa-8" width="300" rounded>
            + New Column
          </VSheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
