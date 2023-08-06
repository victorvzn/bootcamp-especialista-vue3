<script setup>
import { ref } from 'vue'

import { useInvoicesStore } from '@/stores/invoices'
import { useStatusesStore } from '@/stores/statuses'

const { getTotalInvoices } = useInvoicesStore()
const { getStatusOptions } = useStatusesStore()

import BaseButton from '@/components/shared/BaseButton.vue'
import BaseSelect from '@/components/shared/BaseSelect.vue'

const formFilter = {
  status: ''
}
</script>

<template>
  <header class="w-[940px] mx-auto flex justify-between items-center my-20">
    <div class="text-white">
      <h1 class="text-4xl font-extrabold">Invoices</h1>
      <span class="text-lg">There are {{ getTotalInvoices() }} total invoices</span>
    </div>

    <div class="flex gap-8">
      <BaseSelect :options="getStatusOptions()" v-model="formFilter.status" />

      <RouterLink :to="{ name: 'invoice-new' }">
        <BaseButton color="[#7c5df9]">
          <font-awesome-icon icon="fa-solid fa-circle-plus" size="2x" />
          New Invoice
        </BaseButton>
      </RouterLink>
    </div>
  </header>
</template>