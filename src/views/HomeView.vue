<script setup>
import { ref } from 'vue'

import BaseCard from '@/components/shared/BaseCard.vue'

import { useBoardStore } from '@/stores/board'

const { createBoard } = useBoardStore()

const showNewBoardModal = ref(false)

const refFormNewBoard = ref()

const handleNewBoard = () => showNewBoardModal.value = true

const formBoard = ref({
  name: '',
  columns: ['Todo', 'Doing', 'Done']
})

const handleCreateBoard = async () => {
  const { valid } = await refFormNewBoard.value.validate()

  if (valid) {
    console.log('Creando board...')
    const response = await createBoard(formBoard.value)
  
    if (response.id) {
      showNewBoardModal.value = false
    }
  }
}

const requiredField = (value) => {
  if (value) return true

  return 'This field is required'
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
              @click="handleNewBoard"
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

    <v-dialog
      v-model="showNewBoardModal"
      width="500px"
    >
      <v-card title="Add New Board">
        <v-card-text>
          <v-form
            ref="refFormNewBoard"
            @submit.prevent="handleCreateBoard"
          >
            <v-text-field
              v-model="formBoard.name"
              label="Board Name"
              placeholder="e.g. Web Design"
              :rules="[requiredField]"
            />
            <div class="mb-8">
              <h5 class="mb-2">Board Columns</h5>
              <div class="d-flex" style="gap: 1rem;">
                <v-text-field
                  placeholder="e.g. Todo"
                  v-model="formBoard.columns[0]"
                  :rules="[requiredField]"
                />
                <VBtn>❌</VBtn>
              </div>
              <div class="d-flex" style="gap: 1rem;">
                <v-text-field
                  placeholder="e.g. Doing"
                  v-model="formBoard.columns[1]"
                />
                <VBtn>❌</VBtn>
              </div>
              <div class="d-flex" style="gap: 1rem;">
                <v-text-field
                  placeholder="e.g. Doing"
                  v-model="formBoard.columns[2]"
                />
                <VBtn>❌</VBtn>
              </div>
              <VBtn block color="primary" style="display:none;">
                + Add New Column
              </VBtn>
            </div>
            <v-btn type="submit" color="primary" flat block>
              Create Board 
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
