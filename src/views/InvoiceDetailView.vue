<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const { id } = route.params
</script>

<template>
  <main class="w-[940px] mx-auto mt-20">
    <RouterLink :to="{ name: 'home' }" class="text-white font-bold flex gap-5 items-center">
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-[#7968d8]" />
      Go back
    </RouterLink>
    
    <header class="flex justify-between items-center bg-[#1f213a] py-4 px-8 mt-10 rounded-lg">
      <div class="flex items-center text-white gap-3">
        <h3>Status</h3>
        <BaseTag
          class="bg-emerald-400/20 text-emerald-400"
        >
          Pending
        </BaseTag>
      </div>

      <div class="flex items-center gap-2">
        
        <RouterLink
          :to="{ name: 'invoice-edit', params: { id } }"
        >
          <BaseButton
            class="bg-[#262943]"
            >
            Edit
          </BaseButton>
        </RouterLink>
        <BaseButton
          class="bg-[#e55954]"
        >
          Delete
        </BaseButton>
        <BaseButton
          class="bg-[#7c5bf8]"
        >
          Mark as Paid
        </BaseButton>
      </div>
    </header>

    <section
      class="flex flex-col justify-between items-center bg-[#1f213a] py-3 px-8 mt-5 text-white rounded-lg"
    >
      <div class="flex justify-between w-full p-8">
        <div class="text-3xl">
          <span class="text-slate-400">#</span>
          <span class="font-extrabold">1F213A</span>
          <div class="text-xl mt-1">
            Graphic Design
          </div>
        </div>
        <div class="text-sm text-right">
          <div>line 1</div>  
          <div>line 2xxxxxxxxxxxxx</div>  
          <div>line 3</div>  
          <div>line 4</div>  
        </div>
      </div>

      <div class="grid grid-cols-3">
        <div>col1</div>
        <div>col2</div>
        <div>col3</div>
      </div>
      
    </section>
  </main>
</template>