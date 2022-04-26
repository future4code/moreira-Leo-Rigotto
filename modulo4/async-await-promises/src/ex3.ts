// a) não
// b) para garantir que não estamos recebendo dados faltantes?

import axios from "axios"

// c)

type user = {
  id: string
  name: string
  email: string
}

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${BASE_URL}/subscribers`)
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    }
  })
}
