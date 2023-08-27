<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore }  from './stores/auth'
import { useBoardStore } from './stores/board';

const showNewTaskModal = ref(false)

const useBoard = useBoardStore()
const useAuth = useAuthStore()
const router = useRouter()
const route = useRoute()

const form = ref({
  title: '',
  description: '',
  status: '',
  subtasks: [],
})

const handleAddNewTaskModal = () => showNewTaskModal.value = true

const handleLogout = () => {
  useAuth
    .logout()
    .then(() => {
      router.push({ name: 'login' })
    }) 
}

const handleAddNewTask = async () => {
  try {

    const { title, description, status, subtasks } = form.value

    const docId = route.params.id

    await useBoard.createTask({
      docId,
      title,
      description,
      status,
      subtasks
    })

    showNewTaskModal.value = false
  } catch (error) {
    console.error(e)
  } 
  
}
</script>

<template>
  <v-app>
    <v-app-bar color="amber-darken-3">
      <v-container class="d-flex justify-space-between">
        <h1 class="text-h6">Task Managment</h1>

        <div
          class="d-flex"
          style="gap: .5rem;"
          v-if="!useAuth.isLoggedIn"
        >
          <RouterLink
            :to="{ name: 'login' }"
            v-if="!useAuth.isLoggedIn"
          >
            <VBtn variant="flat" color="grey-lighten-3">Login</VBtn>
          </RouterLink>
          <RouterLink
            :to="{ name: 'register' }"
            v-if="!useAuth.isLoggedIn"
          >
            <VBtn variant="flat" color="grey-lighten-3">Register</VBtn>
          </RouterLink>
        </div>

        <div
          class="d-flex align-center"
          style="gap: .5rem;"
          v-if="useAuth.isLoggedIn"
        >
          <v-btn
            variant="flat"
            color="indigo-darken-3"
            @click="handleAddNewTaskModal"
            v-if="useAuth.isLoggedIn"
          >
            + Add New Task
          </v-btn>
          <strong v-if="useAuth.isLoggedIn">Hi, {{ useAuth?.user?.email }}</strong>
          <VBtn
            variant="flat"
            color="grey-lighten-3"
            @click="handleLogout"
            v-if="useAuth.isLoggedIn"
          >
            Logout  
          </VBtn>
        </div>
       
      </v-container>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>

  <v-dialog
    v-model="showNewTaskModal"
    width="500px"
  >
    <v-card title="Add New Task">
      <v-card-text>
        <v-form @submit.prevent="handleSaveNewTask">
          <v-text-field
            label="Title"
            placeholder="e.g. Take coffee break"
            v-model="form.title"
          />
          <v-textarea
            label="Description"
            placeholder="e.g. It's always goog to take a break."
            v-model="form.description"
          />
          <div class="mb-8">
            <h5 class="mb-2">Subtasks</h5>
            <div class="d-flex" style="gap: 1rem;">
              <v-text-field
                placeholder="e.g. Make coffee"
              />
              <VBtn>❌</VBtn>
            </div>
            <div class="d-flex" style="gap: 1rem;">
              <v-text-field
                placeholder="e.g. Make coffee"
              />
              <VBtn>❌</VBtn>
            </div>
            <VBtn block color="primary">+ Add New Subtask</VBtn>
          </div>
          <v-select
            :items="['Todo', 'Doing', 'Done']"
            label="Status"
            v-model="form.status"
          />
          <v-btn
            type="submit"
            color="primary"
            block
          >
            Create Task 
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<!-- 
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</nav> -->