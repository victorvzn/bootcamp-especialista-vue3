<script setup>
  import { useInvoicesStore } from '@/stores/invoices'

  import InvoicesRow from '@/components/home-view/InvoicesRow.vue'

  const { getInvoices } = useInvoicesStore()
</script>

<template>
  <div class="flex flex-col gap-5">
    <article
      class="bg-[#1f213a] text-white flex justify-between items-center py-4 px-6 rounded-lg hover:bg-[#383b67] duration-300"
      v-for="invoice in getInvoices()"
    >
      <InvoicesRow :invoice="invoice" />
    </article>
  </div>
</template>