import { defineStore } from "pinia";

import { fetchInvoices } from "../services/invoices";

export const useInvoicesStore = defineStore({
  id: 'invoices',
  state: () => ({
    invoices: []
  }),
  getters: {
    getInvoices: (state) => () => {
      return state.invoices
    },
    getTotalInvoices: (state) => () => {
      return state.invoices.length
    }
  },
  actions: {
    fetchAll() {
      return fetchInvoices()
        .then(data => {
          console.log(data)
          this.invoices = data
        })
        .catch(err => console.log(err))
    }
  }
})