// a) a diferença é que estamos declarando uma variável que recebe como valor uma função assíncrona.
// b)

import axios from "axios"

const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${BASE_URL}/subscribers`)
  return response.data
}