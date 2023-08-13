<script setup>
import { ref, onBeforeMount } from 'vue'

import BaseInput from '@/components/shared/BaseInput.vue';
import BaseSelect from '@/components/shared/BaseSelect.vue';
import ProductItems from '@/components/shared/ProductItems.vue';

const form = ref({
  billFromStreetAddress: '',
  billFromCity: '',
  billFromPostCode: '',
  billFromCountry: '',
  billToClientName: '',
  billToClientEmail: '',
  billToClientStreetAddress: '',
  billToCity: '',
  billToPostCode: '',
  billToCountry: '',
  invoiceDate: '',
  paymentTerms: '',
  projectDescription: '',
  invoiceItems: []
})

const paymentTermsOptions = ref([
  { value: '1', label: 'Next 60 Days' },
  { value: '2', label: 'Next 30 Days' },
  { value: '3', label: 'Next 15 Days' }
])

const onSubmit = (event) => {
  console.log(form.value)
}

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  data: {
    type: Object,
    data: {}
  }
})

onBeforeMount(() => {
  if (props.data) {
    form.value = {
      billFromStreetAddress: props.data.bill.from.streetAddress,
      billFromCity: props.data.bill.from.city,
      billFromPostCode: props.data.bill.from.postCode,
      billFromCountry: props.data.bill.from.country,
      billToClientName: props.data.bill.to.client.name,
      billToClientEmail: props.data.bill.to.client.email,
      billToClientStreetAddress: props.data.bill.to.streetAddress,
      billToCity: props.data.bill.to.city,
      billToPostCode: props.data.bill.to.postCode,
      billToCountry: props.data.bill.to.country,
      invoiceDate: props.data.invoice.date,
      paymentTerms: props.data.invoice.paymentTerms,
      projectDescription: props.data.invoice.project.description,
      invoiceItems: props.data.invoice.items
    }
  }
})
</script>

<template>
  <div class="w-[640px] mx-auto mt-20">
    <RouterLink :to="{ name: 'home' }" class="text-white font-bold flex gap-5 items-center">
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-[#7968d8]" />
      Go back
    </RouterLink>

    <section class="flex flex-col justify-between bg-[#141625] py-4 px-8 mt-10 rounded-lg">
      <div class="flex items-center text-white gap-3 mb-10">
        <h3 class="text-3xl font-extrabold">{{ label }}</h3>
      </div>

      <form @submit.prevent="onSubmit">
        <h4 class="text-[#5b5290] font-bold mb-5">Bill From</h4>

        <BaseInput
          type="text"
          required
          placeholder="Codigo 234 Av."
          label="Street Address"
          v-model="form.billFromStreetAddress"
       />

        <div class="flex gap-6">
          <BaseInput
            type="text"
            required
            placeholder="Chiclayo"
            label="City"
            v-model="form.billFromCity"
          />
          <BaseInput
            type="text"
            required
            placeholder="00000"
            label="Post Code"
            v-model="form.billFromPostCode"
          />
          <BaseInput
            type="text"
            required
            placeholder="Peru"
            label="Country"
            v-model="form.billFromCountry"
          />
        </div>

        <h4 class="text-[#5b5290] font-bold mb-5">Bill To</h4>

        <BaseInput
          type="text"
          required
          placeholder="Alyssa"
          label="Client's Name"
          v-model="form.billToClientName"
        />

        <BaseInput
          type="text"
          required
          placeholder="alyssa@email.com"
          label="Client's Email"
          v-model="form.billToClientEmail"
        />

        <BaseInput
          type="text"
          required
          placeholder="Codigo 234 Av."
          label="Street Address"
          v-model="form.billToClientStreetAddress"
        />

        <div class="flex gap-6">
          <BaseInput
            type="text"
            required
            placeholder="Chiclayo"
            label="City"
            v-model="form.billToCity"
          />
          <BaseInput
            type="text"
            required
            placeholder="00000"
            label="Post Code"
            v-model="form.billToPostCode"
          />
          <BaseInput
            type="text"
            required
            placeholder="Peru"
            label="Country"
            v-model="form.billToCountry"
          />
        </div>

        <div class="grid grid-cols-2 gap-6 items-center  mt-10">
          <BaseInput
            type="date"
            required
            placeholder="YYYY-MM-DD"
            label="Invoice Date"
            v-model="form.invoiceDate"
          />

          <BaseSelect
            label="Payment Terms"
            :options="paymentTermsOptions"
            v-model="form.paymentTerms"
          />
        </div>

        <BaseInput
          type="text"
          required
          placeholder="YYYY-MM-DD"
          label="Project Description"
          v-model="form.projectDescription"
        />

        <h5 class="text-[#73758c] text-xl font-bold mb-5 mt-10">Item List</h5>

        <ProductItems
          :items="form.invoiceItems"
        />

        <div class="flex justify-end gap-2 mt-10">
          <BaseButton
            class="bg-[#262943]"
          >
            Cancel
          </BaseButton>
          <BaseButton
            class="bg-[#7c5bf8]"
          >
            Save Changes
          </BaseButton>
        </div>
      </form>
    </section>
  </div>
</template>