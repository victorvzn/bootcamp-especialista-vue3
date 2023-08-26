<script setup>
import BaseCard from '@/components/shared/BaseCard.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const { id } = route.params
</script>

<template>
  <div class="d-flex" style="gap:2rem;">
    <VSheet class="d-flex flex-column" style="gap:1rem;">
      <h2 class="text-subtitle-2 flex">
        <v-badge
          dot
          color="error"
          inline
        ></v-badge>
        TODO (4)

        {{ id }}
      </h2>
    
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
    </VSheet>
    <VSheet class="d-flex flex-column" style="gap:1rem;">
      <h2 class="text-subtitle-2 flex">
        <v-badge
          dot
          color="error"
          inline
        ></v-badge>
        DOING (4)
      </h2>

      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
    </VSheet>
    <VSheet class="d-flex flex-column" style="gap:1rem;">
      <h2 class="text-subtitle-2 flex">
        <v-badge
          dot
          color="error"
          inline
        ></v-badge>
        DONE (4)
      </h2>

      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
    </VSheet>
    <VSheet color="grey-lighten-4 pa-8" width="300" rounded>
      + New Column
    </VSheet>
</div>
</template>