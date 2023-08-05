<script setup>
  import { onBeforeMount } from 'vue'

  import { useInvoicesStore } from '@/stores/invoices'

  const { fetchAll, getInvoices } = useInvoicesStore()

  onBeforeMount(async () => {
    await fetchAll()
  })
</script>

<template>
  <header class="w-[940px] mx-auto flex justify-between items-center my-20">
    <div class="text-white">
      <h1 class="text-4xl font-extrabold">Invoices</h1>
      <span class="text-sm">There are 7 total invoices</span>
    </div>

    <button
      class="bg-[#7c5df9] rounded-full px-5 py-3 font-semibold text-white"
    >
      New Invoice
    </button>
  </header>

  <main class="w-[940px] mx-auto flex flex-col gap-5">
    <article
      class="bg-[#1f213a] text-white"
      v-for="invoice in getInvoices()"
    >
      {{ invoice.code }}
    </article>
  </main>
</template>
