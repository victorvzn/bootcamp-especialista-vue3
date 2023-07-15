const BASE_URL = import.meta.env.VITE_API_URL

export const fetchHeroes = async (
  { page, limit, name, gender } = { page: 1, limit: 4, name: '', gender: '' }
) => {

  const response = await fetch(`${BASE_URL}/heroes?page=${page}&limit=${limit}&gender=${gender}`)

  const data = await response.json()

  return data
}

export const createHero = async ({ form }) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(form)
  }

  const response = await fetch(`${BASE_URL}/heroes`, options)

  const data = await response.json()

  console.log(data)

  return data
}