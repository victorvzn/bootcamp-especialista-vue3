<script setup>
  import { ref } from 'vue'

  const query = ref('')
  const filterByGender = ref('')

  const emit = defineEmits(['onSearch', 'onFilter'])
</script>

<template>
  <div class="grid">
    <div>
      <input
        type="text"
        placeholder="Search by name"
        v-model="query"
        @keyup="emit('onSearch', query)"
      />
    </div>
    <div>
      <select v-model="filterByGender" @change="emit('onFilter', filterByGender)">
        <option value="" selected>Select a gender…</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="0">Other</option>
      </select>
    </div>
  </div>
</template>