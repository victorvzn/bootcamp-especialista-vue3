const BASE_URL = import.meta.env.VITE_API_URL

export const fetchHeroes = async () => {

  const response = await fetch(BASE_URL + '/heroes')

  const data = await response.json()

  return data
}