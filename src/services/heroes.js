const BASE_URL = import.meta.env.VITE_API_URL

export const fetchHeroes = async ({ page, limit, name } = { page: 1, limit: 4, name: '' }) => {

  const response = await fetch(`${BASE_URL}/heroes?page=${page}&limit=${limit}&name=${name}`)

  const data = await response.json()

  return data
}