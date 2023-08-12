// import request from './request'

import invoicesData from '@/mock-data/invoices'

export function fetchInvoices() {
  // return request({ method: 'GET', url: 'invoices' })
  return new Promise((resolve, reject) => {
    resolve(invoicesData.invoices)
  })
}

export function getInvoice(id) {
  return new Promise((resolve, reject) => {
    const invoices = invoicesData.invoices
    const filteredInvoce = invoices.find(invoice => invoice.id === id)

    console.log({filteredInvoce})

    resolve(filteredInvoce)
  })
}