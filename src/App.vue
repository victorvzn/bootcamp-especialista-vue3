<script setup>
import { RouterView } from 'vue-router'

import LayoutBase from './layouts/LayoutBase.vue';
import HomeView from './views/HomeView.vue'
</script>

<template>
  <LayoutBase>

    <RouterView />

  </LayoutBase>
</template>

