<script setup>
import { useInvoicesStore } from '@/stores/invoices'
import { useStatusesStore } from '@/stores/statuses'

const { getTotalInvoices } = useInvoicesStore()
const { getStatuses } = useStatusesStore()

import BaseButton from '@/components/shared/BaseButton.vue'
</script>

<template>
  <header class="w-[940px] mx-auto flex justify-between items-center my-20">
    <div class="text-white">
      <h1 class="text-4xl font-extrabold">Invoices</h1>
      <span class="text-lg">There are {{ getTotalInvoices() }} total invoices</span>
    </div>

    {{ getStatuses() }}

    <div class="flex gap-8">
      <select class="bg-transparent text-lg font-bold text-white w-44">
        <option class="text-slate-800" selected>Filter by status</option>
        <option class="text-slate-800 capitalize" value="paid">paid</option>
        <option class="text-slate-800 capitalize" value="pending">pending</option>
        <option class="text-slate-800 capitalize" value="draft">draft</option>
      </select>

      <RouterLink :to="{ name: 'invoice-new' }">
        <BaseButton color="[#7c5df9]">
          <font-awesome-icon icon="fa-solid fa-circle-plus" size="2x" />
          New Invoice
        </BaseButton>
      </RouterLink>
    </div>
  </header>
</template>