<script setup>
import { useInvoicesStore } from '@/stores/invoices'

const { getTotalInvoices } = useInvoicesStore()
</script>

<template>
  <header class="w-[940px] mx-auto flex justify-between items-center my-20">
    <div class="text-white">
      <h1 class="text-4xl font-extrabold">Invoices</h1>
      <span class="text-sm">There are {{ getTotalInvoices() }} total invoices</span>
    </div>

    <RouterLink :to="{ name: 'invoice-new' }">
      <button
        class="bg-[#7c5df9] rounded-full px-5 py-3 font-semibold text-white flex items-center gap-4"
      >
        <font-awesome-icon icon="fa-solid fa-circle-plus" size="2x" />
        New Invoice
      </button>
    </RouterLink>
  </header>
</template>