<script setup>
import { ref, onBeforeMount } from 'vue'
import BaseInput from '@/components/shared/BaseInput.vue';

const defaultItems = ref([
  1, 2
])

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

    <template v-for="item in defaultItems">
      <BaseInput
        type="text"
        placeholder=""
      />
      <BaseInput
        type="number"
        required
        placeholder="0.00"
      />
      <BaseInput
        type="number"
        placeholder="0.00"
      />
      <div>156.01</div>
      <div>
        <font-awesome-icon icon="fa-solid fa-trash" class="text-[#8e93b1]" />
      </div>
    </template>
  </div>

  <BaseButton
      class="bg-[#262943] w-full text-center justify-center"
  >
    + Add New Item
  </BaseButton>
</template>