<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="amber-darken-3">
      <v-container class="d-flex justify-space-between">
        <h1 class="text-h6">Task Managment</h1>

        <v-btn variant="flat" color="indigo-darken-3">+ Add New Task</v-btn>
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

</template>

<!-- 
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</nav> -->