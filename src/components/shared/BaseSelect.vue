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
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
</script>

<template>
  <label class="text-white flex flex-col gap-2 mb-4">
    <span v-if="label">{{ label }}</span>
    <select
      class="w-full py-4 px-5 rounded-lg bg-[#1f213a]"
      v-bind="{
        ...$attrs,
        onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
      }"
      :value="modelValue"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="option === modelValue"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>