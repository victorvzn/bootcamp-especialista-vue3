<script setup>
import BaseCard from '@/components/shared/BaseCard.vue'

import { useBoardStore } from '@/stores/board'

const { createBoard } = useBoardStore()

const handleCreateBoard = () => {
  console.log('Creando board...')
  createBoard({ ejemplo: 'hola' })
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        
        <v-card>
          <v-list>
            <v-list-subheader>ALL BOARDS (3)</v-list-subheader>

            <v-list-item title="Platform Launch" link />
            <v-list-item title="Marketing Plan" link />
            <v-list-item title="Roadmap" link />
          </v-list>

          <v-card-actions>
            <v-btn
              variant="flat"
              color="indigo-darken-3"
              block
              @click="handleCreateBoard"
            >
              + Create New Board
            </v-btn>
          </v-card-actions>
        </v-card>

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
