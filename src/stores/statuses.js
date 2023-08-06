import { defineStore } from "pinia";

import { fetchStatuses } from "@/services/statuses";

export const useStatusesStore = defineStore({
  id: 'statuses',
  state: () => ({
    statuses: []
  }),
  getters: {
    getStatuses: (state) => () => {
      return state.statuses
    },
    getStatusOptions: (state) => () => {
      const newStatuses = state.statuses.map(status => ({
        value: status.id,
        label: status.name,
      }))

      const defaultStatus = {
        value: '',
        label: 'Filter by status'
      }

      return [defaultStatus, ...newStatuses]
    }
  },
  actions: {
    fetchAll() {
      return fetchStatuses()
        .then(data => {
          console.log(data)
          this.statuses = data
        })
        .catch(err => console.log(err))
    }
  }
})