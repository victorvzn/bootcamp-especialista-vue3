<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="amber-darken-3">
      <v-container class="d-flex justify-space-between">
        <h1 class="text-h6">Task Managment</h1>

        <slot name="header-buttons"></slot>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            
            <slot name="side-menu"></slot>

          </v-col>
          <v-col>

            <RouterView />

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
