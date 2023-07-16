<script setup>
import { ref } from 'vue'

import HeroListTable from './Table.vue'
import Pagination from '@/components/shared/Pagination.vue'

const limit = ref(4)
const count = ref(75)

// Vue 2
// export default { 
//   props: {
//     heroes: {
//       type: String,
//       required: true
//     }
//   }
// }

defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  heroes: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['onPage', 'onSearch', 'onFilter', 'onRefresh', 'onUpdateHero'])


const handleOnPage = (page) => emit('onPage', page)

const handleOnRefresh = (page) => emit('onRefresh', page)

const onUpdateHero = (hero) => emit('onUpdateHero', hero)
</script>

<template>
  <HeroListTable
    :heroes="heroes"
    :page="currentPage"
    @onRefresh="handleOnRefresh"
    @onUpdateHero="onUpdateHero"
  />
  
  <Pagination
    :page="currentPage"
    :count="count.value"
    :limit="limit.value"
    @onPage="handleOnPage"
  />
</template>

<style scoped>
.gender--male {
  fill: #60a5fa;
}
.gender--female {
  fill: #fb7185;
}
.gender--none {
  fill: #d7ef1c;
}

.pagination {
  display: flex;
  gap: 1rem;
}

.pagination div {
  width: 100px;
}
</style>