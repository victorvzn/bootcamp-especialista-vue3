<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['onClose'])
</script>

<template>
  <dialog :open="open">
    <article>
      <header>
        <a href="#close" aria-label="Close" class="close" @click="emit('onClose')"></a>
        {{ title }}
      </header>
      <div>
        <slot></slot>
      </div>
    </article>
  </dialog>
</template>