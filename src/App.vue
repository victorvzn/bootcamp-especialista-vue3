<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const showNewTaskModal = ref(false)

const handleAddNewTask = () => showNewTaskModal.value = true
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

        <v-btn
          variant="flat"
          color="indigo-darken-3"
          @click="handleAddNewTask">+ Add New Task</v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
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
                <v-btn variant="flat" color="indigo-darken-3" block>+ Create New Board</v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
          <v-col>

            <RouterView />

          </v-col>
        </v-row>
      </v-container>
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