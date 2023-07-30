const BASE_URL = import.meta.env.VITE_API_URL

export const registerUser = async (form) => {
  console.log(form)
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(`${BASE_URL}/users`, options)

  // const data = await response.json()

  return response
}