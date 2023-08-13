<script setup>
import { ref, onBeforeMount } from 'vue'

import ProductItem from '@/components/shared/ProductItem.vue';

const defaultItems = ref([{}, {}])

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

onBeforeMount(() => {
  if (props.items.length === 0) return

  console.log(props.items)

  defaultItems.value = props.items
})
</script>

<template>
  <div class="text-white grid grid-cols-5 gap-4 mb-5 items-center">
    <div>Item Name</div>
    <div>Qty.</div>
    <div>Price</div>
    <div>Total</div>
    <div></div>

    <template v-for="(item, index) in defaultItems" :key="index">
      <ProductItem :item="item" />
    </template>
  </div>

  <BaseButton
      class="bg-[#262943] w-full text-center justify-center"
  >
    + Add New Item
  </BaseButton>
</template>