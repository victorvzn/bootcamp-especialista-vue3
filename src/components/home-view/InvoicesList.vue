<script setup>
  import { useInvoicesStore } from '@/stores/invoices'

  const { getInvoices } = useInvoicesStore()
</script>

<template>
  <article
    class="bg-[#1f213a] text-white"
    v-for="invoice in getInvoices()"
  >
    {{ invoice.code }}
  </article>
</template>