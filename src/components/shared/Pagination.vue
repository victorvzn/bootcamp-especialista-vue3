<script setup>
const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  count: {
    type: Number,
    default: 0
  },
  limit: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits(['onPage'])

const firstPage = () => {
  if (props.page === 1) return

  const currentPage = 1
  
  emit('onPage', currentPage)
}

const nextPage = () => {
  const lastPage = Math.ceil(props.count.value / props.limit.value)

  if (props.page >= lastPage) return

  const currentPage = props.page + 1

  emit('onPage', currentPage)
}

const prevPage = () => {
  console.log(props.page)
  if (props.page === 1) return

  const currentPage = props.page - 1
  
  emit('onPage', currentPage)
}

const lastPage = () => {
  const lastPage = Math.ceil(props.count.value / props.limit.value) // 100 / 4 = 25 pages

  if (props.page === lastPage) return

  const currentPage = lastPage

  emit('onPage', currentPage)
}
</script>

<template>
  <div class="pagination">
    <button @click="firstPage">First</button>
    <button @click="prevPage">Previous</button>
    <button disabled class="contrast outline">
      {{ page }} of {{ Math.ceil(count / limit) }}
    </button>
    <button @click="nextPage">Next</button>
    <button @click="lastPage">Last</button>
  </div>
</template>