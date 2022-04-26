// a) endpoint get /subscribers
// b) async function functionName(): Promise<any>

import axios from "axios"

// c)
async function getSubscribers(): Promise<any> {
  const res = await axios.get(`${BASE_URL}subscribers`)
  return res.data
}
