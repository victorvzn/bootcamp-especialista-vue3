<script setup>
import { onBeforeMount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useInvoicesStore } from '@/stores/invoices'

const route = useRoute()

const { id } = route.params

const { getOne, getInvoice } = useInvoicesStore()

onBeforeMount(async () => {
  await getOne(id)
})

// TODO: Renderizar los datos del invoice en esta vista
</script>

<template>
  <main class="w-[940px] mx-auto mt-20">
    <RouterLink :to="{ name: 'home' }" class="text-white font-bold flex gap-5 items-center">
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-[#7968d8]" />
      Go back
    </RouterLink>
    
    <header class="flex justify-between items-center bg-[#1f213a] py-4 px-8 mt-10 rounded-lg">
      <div class="flex items-center text-white gap-3">
        <h3>Status</h3>
        <BaseTag
          class="bg-emerald-400/20 text-emerald-400"
        >
          Pending
        </BaseTag>
      </div>

      <div class="flex items-center gap-2">
        
        <RouterLink
          :to="{ name: 'invoice-edit', params: { id } }"
        >
          <BaseButton
            class="bg-[#262943]"
            >
            Edit
          </BaseButton>
        </RouterLink>
        <BaseButton
          class="bg-[#e55954]"
        >
          Delete
        </BaseButton>
        <BaseButton
          class="bg-[#7c5bf8]"
        >
          Mark as Paid
        </BaseButton>
      </div>
    </header>

    <div class="text-white">
      {{ getInvoice() }}  
    </div>

    <section
      class="flex flex-col justify-between items-center bg-[#1f213a] p-10 mt-5 text-white rounded-lg gap-10"
    >
      <div class="flex justify-between w-full">
        <div class="text-3xl">
          <span class="text-slate-400">#</span>
          <span class="font-extrabold">1F213A</span>
          <div class="text-xl mt-1">
            Graphic Design
          </div>
        </div>
        <div class="text-sm text-right">
          <div>line 1</div>  
          <div>line 2xxxxxxxxxxxxx</div>  
          <div>line 3</div>  
          <div>line 4</div>  
        </div>
      </div>

      <div class="grid grid-cols-3 justify-between w-full">
        <div class="flex flex-col gap-10">
          <div>
            <div class="text-lg">Invoice Date</div>  
            <div class="text-xl font-extrabold">21 Aug 2021</div>
          </div>
          <div>
            <div class="text-lg">Invoice Date</div>  
            <div class="text-xl font-extrabold">21 Aug 2021</div>
          </div>
        </div>
        <div>
          <div class="text-lg">Bill to</div>
          <div class="text-xl font-extrabold">Alex Grim</div>
          <div class="text-sm">Line 1</div>
          <div class="text-sm">Line 2</div>
          <div class="text-sm">Line 3</div>
          <div class="text-sm">Line 4</div>
        </div>
        <div>
          <div class="text-lg">Send to</div>
          <div class="text-xl font-extrabold">alexgrim@mail.com</div>
        </div>
      </div>

      <table class="bg-[#252945] w-full rounded-lg">
        <thead>
          <tr>
            <td class="p-6">Item Name</td>
            <td class="p-6 text-center w-44">QTY</td>
            <td class="p-6 text-right w-44">Price</td>
            <td class="p-6 text-right w-44">Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-6 text-xl font-bold">item 1</td>
            <td class="p-6 text-xl font-bold  text-center w-44">1</td>
            <td class="p-6 text-xl font-bold text-right w-44">$ 156.00</td>
            <td class="p-6 text-xl font-bold text-right w-44">$ 156.00</td>
          </tr>
          <tr>
            <td class="p-6 text-xl font-bold">item 1</td>
            <td class="p-6 text-xl font-bold text-center w-44">1</td>
            <td class="p-6 text-xl font-bold text-right w-44">$ 156.00</td>
            <td class="p-6 text-xl font-bold text-right w-44">$ 156.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="bg-[#0b0e16]">
            <td class="p-6" colspan="2">Amount due</td>
            <td class="p-6 text-4xl font-bold text-right" colspan="2">$ 556.00</td>
          </tr>
        </tfoot>
      </table>
      
    </section>
  </main>
</template>