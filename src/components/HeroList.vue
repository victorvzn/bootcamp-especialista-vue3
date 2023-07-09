<script setup>
import IconGenderMale from '../components/icons/otro/IconGenderMale.vue'
import IconGenderFemale from '@/components/icons/IconGenderFemale.vue'

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
  heroes: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <table role="grid">
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Gender</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="hero in heroes" :key="hero.id">
        <th>{{ hero.id }}</th>
        <td>
          <img :src="hero.image_screen_url" width="156" height="88" />
        </td>
        <td>
          <div>{{ hero.name }}</div>
          <div>Real name: {{ hero.real_name }}</div>
          <div>Aliases: {{ hero.aliases }}</div>
          <div v-if="hero.birth">Birth: {{ hero.birth }}</div>
        </td>
        <th>
          <IconGenderMale v-if="hero.gender === 1" class="gender--male" />
          <IconGenderFemale  v-else-if="hero.gender === 2" class="gender--female" />
          <span v-else>-</span>
        </th>
      </tr>

      <tr>
        <th>1</th>
        <td>
          <img src="" width="156" height="88" />
        </td>
        <td>
          <div>Hero name</div>
          <div>Real name: ----</div>
          <div>Aliases: ----</div>
          <div>Birth: ----</div>
        </td>
        <td>
          Gender
        </td>
      </tr>
    </tbody>

    <!-- Pagination here -->
  </table>
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
</style>