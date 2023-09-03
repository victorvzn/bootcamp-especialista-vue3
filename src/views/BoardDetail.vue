<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useRoute } from 'vue-router'
import { useBoardStore } from '@/stores/board'

import { requiredField } from '@/validations'

import BaseCard from '@/components/shared/BaseCard.vue'

const useBoard = useBoardStore()

const {
  getColumnsBoardById,
  getCardsBoardByStatus
} = storeToRefs(useBoard)

const route = useRoute()

const cardSelected = ref(null)
const showDetailTaskModal = ref(false)

const form = ref({ status: '' })
const formNewColumn = ref({ name: '' })

watch(() => form.value.status, (newValue, oldValue) => {
  console.log(newValue)
  if (newValue != oldValue) {
    handleSaveDetailTask()
  }
})

const handleDetailCard = (card) => {
  showDetailTaskModal.value = true
  cardSelected.value = card

  form.value.status = cardSelected.value.status
}

const handleSaveDetailTask = async () => {
  const docId = route.params.id // boardId
  const taskId = cardSelected.value.id
  const newStatus = form.value.status

  console.log({ docId, taskId, newStatus })
  
  await useBoard.updateStatusTask(
    { docId, taskId, newStatus }
  )

  await useBoard.fetchBoards()
}

const handleRemoveTask = async (id) => {
  const docId = route.params.id // boardId
  const taskId = id
  
  console.log(id)

  await useBoard.deleteTask({
    docId,
    taskId
  })

  await useBoard.fetchBoards()

  showDetailTaskModal.value = false
}

const handleAddABoardColumn = async () => {
  console.log('add column...', formNewColumn.value.name)
  const docId = route.params.id
  const columnName = formNewColumn.value.name

  await useBoard.addColumnBoard({
    docId,
    columnName
  })

  await useBoard.fetchBoards()
}
</script>

<template>
  <div class="d-flex overflow-x-auto" style="gap:2rem;width:60vw;">
    <VSheet
      class="d-flex flex-column"
      style="gap:1rem;"
      v-for="(column, index) in getColumnsBoardById(route.params.id)"
      :key="index"
    >
      <h2 class="text-subtitle-2 flex" style="width:300px;">
        <v-badge
          dot
          color="error"
          inline
        ></v-badge>
        {{ column  }} ({{ getCardsBoardByStatus(route.params.id, column).length }})
      </h2> 
      <BaseCard
        v-for="(card, index) in getCardsBoardByStatus(route.params.id, column)"
        :key="index"
        :card="card"
        @click="handleDetailCard(card)"
      />
    </VSheet>
    <VSheet
      class="d-flex flex-column justify-center align-center pa-8"
      color="grey-lighten-3"
      width="300"
      min-height="500"
    >
      <VForm @submit.prevent="handleAddABoardColumn">
        <VTextField
          label="Column name"
          :rules="[requiredField]"
          v-model="formNewColumn.name"
        />
        <VBtn
          type="submit"
          variant="flat"
          color="indigo-darken-3"
        >
          + Add Column
        </VBtn>
      </VForm>
    </VSheet>

    <v-dialog
      v-model="showDetailTaskModal"
      width="500px"
    >
    <v-card>
      <!-- TODO: Cambiar el estado del card en firebase y actualiza el board sin cerrar el modal -->
      <template v-slot:title>
        <div class="d-flex justify-space-between align-center">
          <span>{{ cardSelected.title }}</span>
          
          <v-btn density="compact" color="red" @click="handleRemoveTask(cardSelected.id)">Delete</v-btn>
        </div>
      </template>

      <template v-slot:subtitle>
        {{ cardSelected.description }}
      </template>

      <template v-slot:text>
        <v-form >
          <v-select
            :items="useBoard.getColumnsBoardById(route.params.id)"
            label="Status"
            v-model="form.status"
          />
        </v-form>
      </template>
    </v-card>
  </v-dialog>
</div>
</template>