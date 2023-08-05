<script setup>
  import { onBeforeMount } from 'vue'

  import HomeViewHeader from '@/components/home-view/HomeViewHeader.vue'
  import InvoiceList from '@/components/home-view/InvoicesList.vue'

  import { useInvoicesStore } from '@/stores/invoices'

  const { fetchAll } = useInvoicesStore()

  onBeforeMount(async () => await fetchAll())
</script>

<template>
  <HomeViewHeader />

  <main class="w-[940px] mx-auto flex flex-col gap-5">
    <InvoiceList />
  </main>
</template>
