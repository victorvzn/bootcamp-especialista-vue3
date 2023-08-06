<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="w-[940px] mx-auto mt-20">
    <RouterLink :to="{ name: 'home' }" class="text-white font-bold flex gap-5 items-center">
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-[#7968d8]" />
      Go back
    </RouterLink>
    
    <header class="flex justify-between items-center bg-[#1f213a] py-3 px-8 mt-10 rounded-lg">
      <div class="flex items-center text-white gap-3">
        <h3>Status</h3>
        <BaseTag
          class="bg-emerald-400/20 text-emerald-400"
        >
          Pending
        </BaseTag>
      </div>

      <div class="flex items-center ">
        <BaseButton>Edit</BaseButton>
        <BaseButton color="red">Delete</BaseButton>
        <BaseButton color="blue">Mark as Paid</BaseButton>
      </div>
    </header>

    <section class="flex justify-between items-center bg-[#1f213a] py-3 px-8 mt-5 text-white rounded-lg">
      asdasda
    </section>
  </main>
</template>