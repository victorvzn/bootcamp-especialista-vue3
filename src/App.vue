<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="amber-darken-3">
      <v-container>
        <h1>Task Managment</h1>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            MENU
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