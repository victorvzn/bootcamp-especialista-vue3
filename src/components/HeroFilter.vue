<script setup>
  import { ref } from 'vue'

  const query = ref('')
  const filterByGender = ref('')

  const genderOptions = ref([
    {
      label: 'Male',
      value: 1
    },
    {
      label: 'Female',
      value: 2
    },
    {
      label: 'Other',
      value: 0
    }
  ])

  const emit = defineEmits(['onSearch', 'onFilter'])
</script>

<template>
  <div class="grid">
    <div>
      <BaseInput
        label=""
        placeholder="Search by name"
        required
        v-model="query"
        @keyup="emit('onSearch', query)"
      />
    </div>
    <div>
      <BaseSelect
        label=""
        v-model="filterByGender"
        @change="emit('onFilter', $event.target.value)"
        :options="genderOptions"
      />
    </div>
  </div>
</template>