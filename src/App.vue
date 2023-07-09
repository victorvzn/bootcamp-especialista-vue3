<script setup>
</script>

<template>
  <nav class="container">
    <ul>
      <li>
        <strong>Listado de Heroes con Vue 3</strong>
      </li>
    </ul>
  </nav>

  <main class="container">
    <div class="headings">
      <h2>Super Heroes</h2>
      <h3>¡Elije a tu super heroe favorito!</h3>
    </div>

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
  </main>
</template>

<style scoped>
</style>
