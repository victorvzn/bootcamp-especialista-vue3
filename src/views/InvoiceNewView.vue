<script setup>
import { ref } from 'vue'

import BaseInput from '../components/shared/BaseInput.vue';
import BaseSelect from '../components/shared/BaseSelect.vue';

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
})

const onSubmit = (event) => {
  console.log(form.value)
}
</script>

<template>
  <div class="w-[640px] mx-auto mt-20">
    <RouterLink :to="{ name: 'home' }" class="text-white font-bold flex gap-5 items-center">
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-[#7968d8]" />
      Go back
    </RouterLink>

    <section class="flex flex-col justify-between bg-[#141625] py-4 px-8 mt-10 rounded-lg">
      <div class="flex items-center text-white gap-3 mb-10">
        <h3 class="text-3xl font-extrabold">New Invoice</h3>
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

        <div class="flex gap-6 mt-10">
          <BaseInput
            type="date"
            required
            placeholder="YYYY-MM-DD"
            label="Invoice Date"
            v-model="form.invoiceDate"
          />


          <label class="text-white flex flex-col gap-2 mb-4 2basis-1/2">
            Payment Terms
            <select class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.paymentTerms">
              <option>Next 60 Days</option>
              <option selected>Next 30 Days</option>
              <option>Next 15 Days</option>
            </select>
            <BaseSelect
              label="Payment Terms"
              :options="[
                { value: '1', label: 'Next 60 Days' },
                { value: '2', label: 'Next 30 Days' },
                { value: '3', label: 'Next 15 Days' }
              ]"
              v-model="form.paymentTerms"
            />
          </label>
        </div>

        <pre class="text-white">{{ form }}</pre>

        <BaseInput
          type="text"
          required
          placeholder="YYYY-MM-DD"
          label="Project Description"
          v-model="form.projectDescription"
        />

        <h5 class="text-[#73758c] text-xl font-bold mb-5 mt-10">Item List</h5>

        <div class="text-white grid grid-cols-5 gap-4 mb-5 items-center">
          <div>Item Name</div>
          <div>Qty.</div>
          <div>Price</div>
          <div>Total</div>
          <div></div>

          <BaseInput
            type="text"
            placeholder=""
          />
          <BaseInput
            type="text"
            required
            placeholder="0.00"
          />
          <BaseInput
            type="text"
            placeholder="0.00"
          />
          <div>156.01</div>
          <div>
            <font-awesome-icon icon="fa-solid fa-trash" class="text-[#8e93b1]" />
          </div>

          <BaseInput
            type="text"
            placeholder=""
          />
          <BaseInput
            type="text"
            required
            placeholder="0.00"
          />
          <BaseInput
            type="text"
            placeholder="0.00"
          />
          <div>156.01</div>
          <div>
            <font-awesome-icon icon="fa-solid fa-trash" class="text-[#8e93b1]" />
          </div>
        </div>

        <BaseButton
            class="bg-[#262943] w-full text-center justify-center"
        >
          + Add New Item
        </BaseButton>

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