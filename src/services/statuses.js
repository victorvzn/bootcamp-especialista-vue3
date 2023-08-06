import invoicesData from '@/mock-data/invoices'

export function fetchStatuses() {
  return new Promise((resolve, reject) => {
    resolve(invoicesData.statuses)
  })
}