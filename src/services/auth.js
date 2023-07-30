const BASE_URL = import.meta.env.VITE_API_URL

export const registerUser = async (form) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(`${BASE_URL}/users`, options)

  return response
}

export const loginUser = async ({ email, password }) => {
  const params = `email=${email}&password=${password}`

  const url = `${BASE_URL}/users?${params}`

  const response = await fetch(url)

  return response
}