// a) é do tipo Promise<void>. Porque é uma função assíncrona que não retorna nada.
// b)

import axios from "axios"

async function PostNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  axios.post(`${BASE_URL}news`, { title: title, content: content, date: date })
}
