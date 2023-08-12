import { defineStore } from "pinia";

import { fetchInvoices, getInvoice } from "../services/invoices";

export const useInvoicesStore = defineStore({
  id: 'invoices',
  state: () => ({
    invoices: [],
    invoice: null
  }),
  getters: {
    getInvoices: (state) => () => {
      return state.invoices
    },
    getTotalInvoices: (state) => () => {
      return state.invoices.length
    },
    getInvoice: (state) => () => {
      return state.invoice
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
    },
    getOne(id) {
      return getInvoice(id)
        .then(data => {
          console.log(data)
          this.invoice = data
        })
        .catch(err => console.log(err))
    }
  }
})