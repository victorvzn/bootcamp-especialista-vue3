const BASE_URL = import.meta.env.VITE_API_URL

export const fetchHeroes = async ({ page, limit } = { page: 1, limit: 4 }) => {

  const response = await fetch(`${BASE_URL}/heroes?page=${page}&limit=${limit}`)

  const data = await response.json()

  return data
}