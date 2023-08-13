<script setup>
import { ref } from 'vue'

import BaseInput from '@/components/shared/BaseInput.vue';

const item = ref({
  name: '',
  qty: 0,
  price: 0.00
})

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <BaseInput
    type="text"
    placeholder=""
    v-model="item.name"
    />
    <BaseInput
    type="number"
    required
    placeholder="0"
    v-model="item.qty"
    />
    <BaseInput
    type="number"
    placeholder="0.00"
    v-model="item.price"
  />
  <div>156.01</div>
  <div>
    <font-awesome-icon icon="fa-solid fa-trash" class="text-[#8e93b1]" />
  </div>
</template>