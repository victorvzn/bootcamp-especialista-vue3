<script setup>
import { useInvoicesStore } from '@/stores/invoices'

const { getTotalInvoices } = useInvoicesStore()

import BaseButton from '@/components/shared/BaseButton.vue'
</script>

<template>
  <header class="w-[940px] mx-auto flex justify-between items-center my-20">
    <div class="text-white">
      <h1 class="text-4xl font-extrabold">Invoices</h1>
      <span class="text-sm text-lg">There are {{ getTotalInvoices() }} total invoices</span>
    </div>

    <RouterLink :to="{ name: 'invoice-new' }">
      <BaseButton color="[#7c5df9]">
        <font-awesome-icon icon="fa-solid fa-circle-plus" size="2x" />
        New Invoice
      </BaseButton>
    </RouterLink>
  </header>
</template>