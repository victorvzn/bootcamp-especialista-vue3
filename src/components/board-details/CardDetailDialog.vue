<script setup>
import { ref, onBeforeMount, watch, emit } from 'vue'

import { useBoardStore } from '../../stores/board';
import { useRoute } from 'vue-router'

const showDetailTaskModal = ref(false)

const route = useRoute()

const useBoard = useBoardStore()

const form = ref({
  status: ''
})

const handleSaveDetailTask = () => {}

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  },
  card: {
    type: Object,
    default: () => {}
  }
})

defineEmits(['onClose'])

watch(() => props.showModal, (newValue, oldValue) => {
  showDetailTaskModal.value = newValue
})

watch(showDetailTaskModal, (newValue, oldValue) => {
  emit('onClose')
})

onBeforeMount(() => {
  console.log('modal')
  showDetailTaskModal.value = props.showModal
  console.log(showDetailTaskModal.value, props.showModal)
})
</script>

<template>
  <v-dialog
    v-model="showDetailTaskModal"
    width="500px"
  >
    <v-card title="Add New Task">
      <v-card-text>
        <h3 class="mb-2">Title</h3>
        <h3 class="mb-2">Description</h3>
        <h3 class="mb-2">Subtasks</h3>
        
        <v-form @submit.prevent="handleSaveDetailTask">
          <v-select
            :items="useBoard.getColumnsBoardById(route.params.id)"
            label="Status"
            v-model="form.status"
          />
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>