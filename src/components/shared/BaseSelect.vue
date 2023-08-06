<script setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <label>
    {{ label }}
    <select
      class="bg-transparent text-lg font-bold text-white w-44"
      v-bind="$attrs"
    >
      <option
        class="text-slate-800 capitalize" value="paid"
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>