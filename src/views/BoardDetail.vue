<script setup>
import { ref, watch } from 'vue'
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

const cardSelected = ref(null)
const showDetailTaskModal = ref(false)

const form = ref({
  status: ''
})

watch(() => form.value.status, (newValue, oldValue) => {
  console.log(newValue)
  handleSaveDetailTask()
})

const handleDetailCard = (card) => {
  showDetailTaskModal.value = true
  cardSelected.value = card

  form.value.status = cardSelected.value.status
}

const handleSaveDetailTask = () => {

  console.log(form.value.status.value)
}
</script>

<template>
  <div class="d-flex" style="gap:2rem;">
    <VSheet
      class="d-flex flex-column"
      width="300"
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
        {{ column  }} ({{ getCardsBoardByStatus(route.params.id, column).length }})
      </h2>
      <BaseCard
        v-for="(card, index) in getCardsBoardByStatus(route.params.id, column)"
        :key="index"
        :card="card"
        @click="handleDetailCard(card)"
      />
    </VSheet>
    <v-dialog
      v-model="showDetailTaskModal"
      width="500px"
    >
    <v-card :title="cardSelected.title">
      <v-card-text>
        <h3 class="mb-2">Title</h3>
        <h3 class="mb-2">{{ cardSelected.description }}</h3>
        <h3 class="mb-2">Subtasks</h3>
x
        {{ cardSelected.subtasks }}
        {{ cardSelected.status }}

        {{ form.status }}

        <!-- TODO: Cambiar el estado del card en firebase y actualiza el board sin cerrar el modal -->
        
        <v-form >
          <v-select
            :items="useBoard.getColumnsBoardById(route.params.id)"
            label="Status"
            v-model="form.status"
          />
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>
</template>