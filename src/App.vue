<script setup>
  import { ref } from 'vue'

  import empresas from './empresas.json'

  const DEFAULT_FORM_DATA = {
    id: null,
    name: '',
    owner: ''
  }

  const enterprises = ref(empresas)
  const formData = ref({ ...DEFAULT_FORM_DATA })

  const onSubmit = () => {
    const { id, name, owner } = formData.value

    const isNew = !formData.value.id

    if (isNew) { // Is New
      const newId = crypto.randomUUID()
      const newEnterprise = {
        id: newId,
        name,
        owner
      }

      enterprises.value = [ ...enterprises.value, newEnterprise ]

      console.log('guardando data....', newEnterprise)
    } else { // Update
      console.log('>>> guardando la actualización...')
    }

    formData.value = {
      id: null,
      name: '',
      owner: ''
    }
  }

  const onUpdate = (enterprise) => {
    formData.value = {...enterprise}

    console.log('actualizando empresa....', enterprise.name)
  }
</script>

<template>
  <div class="container">
    <nav>
      <ul>
        <li>Lista de empresas</li>
      </ul>
      <ul>
        <li>
          <button role="button">Nuevo company</button>
        </li>
      </ul>
    </nav>

    <div class="grid">
      <div>
        <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(empresa, index) in enterprises" :key="empresa.id">
            <td>{{ index + 1 }}</td>
            <td>{{ empresa.name }}</td>
            <td>{{ empresa.owner }}</td>
            <td>
              <button @click="onUpdate(empresa)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:#fff"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"/></svg>  
              </button>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
      <div>
        {{ formData }}
        <form @submit.prevent="onSubmit">
          <label>
            Nombre empresa
            <input
              type="text"
              placeholder="Ex. Mi empresa"
              required
              v-model="formData.name"
            />
          </label>
          <label>
            Nombre propietario
            <input
              type="text"
              placeholder="Ex. Jimmy"
              required
              v-model="formData.owner"
            />
          </label>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
