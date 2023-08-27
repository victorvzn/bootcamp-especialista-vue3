<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { useAuthStore }  from './stores/auth'

const showNewTaskModal = ref(false)

const useAuth = useAuthStore()
const router = useRouter()

const handleAddNewTask = () => showNewTaskModal.value = true

const handleLogout = () => {
  useAuth
    .logout()
    .then(() => {
      router.push({ name: 'login' })
    }) 
}
</script>

<template>
  <v-app>
    <v-app-bar color="amber-darken-3">
      <v-container class="d-flex justify-space-between">
        <h1 class="text-h6">Task Managment</h1>

        <div class="d-flex" style="gap: .5rem;">
          <RouterLink :to="{ name: 'login' }">
            <VBtn variant="flat" color="grey-lighten-3">Login</VBtn>
          </RouterLink>
          <RouterLink :to="{ name: 'register' }">
            <VBtn variant="flat" color="grey-lighten-3">Register</VBtn>
          </RouterLink>
        </div>

        <div class="d-flex" style="gap: .5rem;">
          <v-btn
            variant="flat"
            color="indigo-darken-3"
            @click="handleAddNewTask">+ Add New Task</v-btn>
        </div>

        <div class="d-flex" style="gap: .5rem;">
          --{{ useAuth.user }}--
          <VBtn
            variant="flat"
            color="grey-lighten-3"
            @click="handleLogout"
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
        <v-form>
          <v-text-field
            label="Title"
            placeholder="e.g. Take coffee break"
          />
          <v-textarea
            label="Description"
            placeholder="e.g. It's always goog to take a break."
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
          ></v-select>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" block @click="showNewTaskModal = false">
          Create Task 
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<!-- 
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</nav> -->