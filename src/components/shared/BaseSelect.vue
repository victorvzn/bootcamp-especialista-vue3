<script setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  label: {
    type: String,
    default: 'Base label'
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
  <label for="">
    {{ label }}
    <select
      v-bind="$attrs"
      @onChange="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">Select a {{ label }}...</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>