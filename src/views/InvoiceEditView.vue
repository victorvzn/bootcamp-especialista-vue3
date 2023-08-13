<script setup>
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

import { useInvoicesStore } from '@/stores/invoices'

import InvoiceForm from '@/components/shared/InvoiceForm.vue';

const route = useRoute()

const { getOne, getInvoice } = useInvoicesStore()

const { id } = route.params

onBeforeMount(async () => await getOne(id))
</script>

<template>
  <InvoiceForm
    label="Edit #12345"
    :data="getInvoice()"
  />
</template>