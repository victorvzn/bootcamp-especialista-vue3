<script setup>
import { RouterLink } from 'vue-router'

import { formatNumber } from '@/utils'

import BaseTag from '@/components/shared/BaseTag.vue'

defineProps({
  invoice: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="w-20">
    <span class="text-[#7e85b1]">#</span>
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
  <div class="w-40 capitalize flex justify-center">
    <BaseTag
      class="bg-emerald-400/20 text-emerald-400"
      v-if="invoice.status === 'paid'"
    >
      <font-awesome-icon icon="fa-solid fa-circle" class="text-[0.6rem]" />
      <span class="text-base">{{ invoice.status }}</span>  
    </BaseTag>
    <BaseTag
      class="bg-orange-400/20 text-orange-400"
      v-if="invoice.status === 'pending'"
    >
      <font-awesome-icon icon="fa-solid fa-circle" class="text-[0.6rem]" />
      <span class="text-base">{{ invoice.status }}</span>  
    </BaseTag>
    <BaseTag
      class="bg-slate-400/20 text-slate-400"
      v-if="invoice.status === 'draft'"
    >
      <font-awesome-icon icon="fa-solid fa-circle" class="text-[0.6rem]" />
      <span class="text-base">{{ invoice.status }}</span>  
    </BaseTag>
  </div>
  <div class="w-5 text-right cursor-pointer">
    <RouterLink :to="{ name: 'invoice-detail', params: { id: invoice.id } }">
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-[#7968d8]" />
    </RouterLink>
  </div>
</template>