<script setup>
  import { RouterLink } from 'vue-router'

  import { useInvoicesStore } from '@/stores/invoices'

  import { formatNumber } from '@/utils'

  const { getInvoices } = useInvoicesStore()
</script>

<template>
  <div class="flex flex-col gap-5">
    <article
      class="bg-[#1f213a] text-white flex justify-between items-center py-4 px-6 rounded-lg"
      v-for="invoice in getInvoices()"
    >
      <div class="w-20">
        <span class="text-slate-400">#</span>
        <span class="font-bold">{{ invoice.code }}</span>
      </div>
      <div class="w-40 font-bold">
        {{ invoice.invoice.date }}
      </div>
      <div class="w-40 font-bold">
        {{ invoice.bill.to.client.name }}
      </div>
      <div class="w-44 font-bold text-3xl text-right">
        {{ invoice.invoice.currency.symbol }}
        {{ formatNumber(invoice.invoice.grandTotal) }}
      </div>
      <div class="w-40 capitalize">
        <div
          class="py-1 rounded-md text-center font-bold min-w-[50px] bg-emerald-400/20 text-emerald-400 flex justify-center items-center gap-1 text-3xl"
          v-if="invoice.status === 'paid'"
        >
          <span>•</span>
          <span class="text-base">{{ invoice.status }}</span>
        </div>
        <div
          class="py-1 rounded-md text-center font-bold min-w-[50px] bg-orange-400/20 text-orange-400 flex justify-center items-center gap-1 text-3xl"
          v-if="invoice.status === 'pending'"
        >
          <span>•</span>
          <span class="text-base">{{ invoice.status }}</span>
        </div>
        <div
          class="py-1 rounded-md text-center font-bold min-w-[50px] bg-slate-400/20 text-slate-400 flex justify-center items-center gap-1  text-3xl"
          v-if="invoice.status === 'draft'"
        >
          <span>•</span>
          <span class="text-base">{{ invoice.status }}</span>
        </div>
      </div>
      <div class="w-5 text-right cursor-pointer">
        <RouterLink :to="{ name: 'invoice-detail', params: { id: invoice.id } }">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </RouterLink>
      </div>
    </article>
  </div>
</template>