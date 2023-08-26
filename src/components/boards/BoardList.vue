<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useBoardStore } from '@/stores/board'

import { requiredField } from '@/validations'

const { createBoard, getBoards, isLoading } = useBoardStore()

const formBoard = ref({
  name: '',
  columns: ['Todo', 'Doing', 'Done']
})
const showNewBoardModal = ref(false)
const refFormNewBoard = ref()

const handleNewBoard = () => showNewBoardModal.value = true

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
</script>

<template>
  <v-card>
    <v-list>
      <v-list-subheader>ALL BOARDS ({{ getBoards.length }}) {{ isLoading }}</v-list-subheader>
        <v-list-item
          v-for="board in getBoards"
          :key="board.id"
          :title="board.name ? board.name : '<no-name>'"
          link
          :to="{ name: 'board-detail', params: { id: board.id }}"
        />
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
</template>