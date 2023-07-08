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
  const isOpenDeleteModal = ref(false)
  const selectedEnterprise = ref(DEFAULT_FORM_DATA)

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

      const enterpriseIndexFound = enterprises.value.findIndex(
        enterprise => enterprise.id === id
      )

      enterprises.value[enterpriseIndexFound] = { id, name, owner }
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

  const onPrevDelete = (enterprise) => {
    console.log('eliminando empresa...')
    selectedEnterprise.value = enterprise

    isOpenDeleteModal.value = true
  }

  const onDelete = () => {
    const selectedId = selectedEnterprise.value.id

    const updatedEnterprises = enterprises.value.filter(
      enterprise => enterprise.id !== selectedId
    )

    enterprises.value = updatedEnterprises

    toggleDeleteModal()
  }
  
  const toggleDeleteModal = () => {
    isOpenDeleteModal.value = false
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
              <div class="flex">
                <button
                  role="button"
                  @click="onUpdate(empresa)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:#fff"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"/></svg>  
                </button>
                <button
                  role="button"
                  class="secondary"
                  @click="onPrevDelete(empresa)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:#fff"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/></svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
      <div>
        {{ selectedEnterprise }}
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

  <dialog :open="isOpenDeleteModal">
    <article>
      <h3>Confirm your action!</h3>
      <p>Are you sure you want to delete this enterprise?</p>
      <footer>
        <a
          href="#cancel"
          role="button"
          class="secondary"
          @click="toggleDeleteModal">
          Cancel
        </a>
        <a
          href="#confirm"
          role="button"
          @click="onDelete">
          Confirm
        </a>
      </footer>
    </article>
  </dialog>
</template>

<style scoped>
.flex {
  display: flex;
  gap: .5rem;
}
</style>
