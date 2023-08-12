<script setup>
import { ref } from 'vue'
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

        <label class="text-white flex flex-col gap-2 mb-4">
          Street Address
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billFromStreetAddress" />
        </label>

        <div class="flex gap-6">
          <label class="text-white flex flex-col gap-2 mb-4">
            City
            <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billFromCity" />
          </label>
          <label class="text-white flex flex-col gap-2 mb-4">
            Post Code
            <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billFromPostCode" />
          </label>
          <label class="text-white flex flex-col gap-2 mb-4">
            Country
            <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billFromCountry" />
          </label>
        </div>

        <h4 class="text-[#5b5290] font-bold mb-5">Bill To</h4>

        <label class="text-white flex flex-col gap-2 mb-4">
          Client's Name
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billToClientName" />
        </label>

        <label class="text-white flex flex-col gap-2 mb-4">
          Client's Email
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billToClientEmail" />
        </label>

        <label class="text-white flex flex-col gap-2 mb-4">
          Street Address
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billToClientStreetAddress" />
        </label>

        <div class="flex gap-6">
          <label class="text-white flex flex-col gap-2 mb-4">
            City
            <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billToCity" />
          </label>
          <label class="text-white flex flex-col gap-2 mb-4">
            Post Code
            <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billToPostCode" />
          </label>
          <label class="text-white flex flex-col gap-2 mb-4">
            Country
            <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.billToCountry" />
          </label>
        </div>

        <div class="flex gap-6 mt-10">
          <label class="text-white flex flex-col gap-2 mb-4 basis-1/2">
            Invoice Date
            <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.invoiceDate" />
          </label>
          <label class="text-white flex flex-col gap-2 mb-4 2basis-1/2">
            Payment Terms
            <select class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.paymentTerms">
              <option>Next 60 Days</option>
              <option selected>Next 30 Days</option>
              <option>Next 15 Days</option>
            </select>
          </label>
        </div>

        <label class="text-white flex flex-col gap-2 mb-4">
          Project Description
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" v-model="form.projectDescription" />
        </label>

        <h5 class="text-[#73758c] text-xl font-bold mb-5 mt-10">Item List</h5>

        <div class="text-white grid grid-cols-5 gap-4 mb-5">
          <div>Item Name</div>
          <div>Qty.</div>
          <div>Price</div>
          <div>Total</div>
          <div></div>

          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" />
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" />
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" />
          <div>156.01</div>
          <div>
            <font-awesome-icon icon="fa-solid fa-trash" class="text-[#8e93b1]" />
          </div>

          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" />
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" />
          <input type="text" class="w-full py-4 px-5 rounded-lg bg-[#1f213a]" />
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