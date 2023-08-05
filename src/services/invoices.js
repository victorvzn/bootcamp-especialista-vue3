// import request from './request'

import invoicesData from '@/mock-data/invoices'

export function fetchInvoices() {
  // return request({ method: 'GET', url: 'invoices' })
  return new Promise((resolve, reject) => {
    resolve(invoicesData)
  })
}