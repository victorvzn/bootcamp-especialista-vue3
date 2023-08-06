import { defineStore } from "pinia";

import { fetchStatuses } from "@/services/statuses";

export const useStatusesStores = defineStore({
  id: 'statuses',
  state: () => ({
    statuses: []
  }),
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