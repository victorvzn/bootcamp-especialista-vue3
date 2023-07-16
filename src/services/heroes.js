const BASE_URL = import.meta.env.VITE_API_URL

export const fetchHeroes = async (
  { page, limit, name, gender } = { page: 1, limit: 4, name: '', gender: '' }
) => {

  const params = `page=${page}&limit=${limit}&name=${name}&gender=${gender}`

  const url = `${BASE_URL}/heroes2?${params}`

  const response = await fetch(url)

  const data = await response.json()

  return data
}

export const createHero = async ({ form }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(`${BASE_URL}/heroes2`, options)

  const data = await response.json()

  console.log({ data, form })

  return data
}

export const deleteHero =  async ({ id }) => {
  const options = {
    method: 'DELETE'
  }

  const response = await fetch(`${BASE_URL}/heroes2/${id}`, options)

  const data = await response.json()

  return data
}