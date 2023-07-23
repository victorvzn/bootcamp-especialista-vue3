<script setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  label: {
    type: String,
    default: 'Base label'
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: "Ex. some text"
  },
  modelValue: {
    type: [String],
    default: ''
  }
})
</script>

<template>
  <label for="">
    {{ label }}
    <input
      :type="type"
      :placeholder="placeholder"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>