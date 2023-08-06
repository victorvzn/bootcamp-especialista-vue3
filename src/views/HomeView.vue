<script setup>
  import { onBeforeMount } from 'vue'

  import HomeViewHeader from '@/components/home-view/HomeViewHeader.vue'
  import InvoiceList from '@/components/home-view/InvoicesList.vue'

  import { useInvoicesStore } from '@/stores/invoices'
  import { useStatusesStores } from '@/stores/statuses'

  const { fetchAll } = useInvoicesStore()

  const { fetchAll: fetchAllStatuses } = useStatusesStores()

  onBeforeMount(async () => {
    await fetchAllStatuses()

    await fetchAll()
  })
</script>

<template>
  <HomeViewHeader />

  <main class="w-[940px] mx-auto">
    <InvoiceList />
  </main>
</template>
