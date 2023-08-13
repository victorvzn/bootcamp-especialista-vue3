<script setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  label: {
    type: String,
    default: 'Base label'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
</script>

<template>
  <label class="text-white flex flex-col gap-2 mb-4">
    {{ label }}
    <input
      type="text"
      class="w-full py-4 px-5 rounded-lg bg-[#1f213a]"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"  
    />
  </label>
</template>