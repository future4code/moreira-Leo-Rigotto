import axios from "axios"

type user = {
  id: string
  name: string
  email: string
}

async function sendMessage(users: user[], message: string): Promise<void> {
  try {
    for (const user of users) {
      await axios.post(`${BASE_URL}notifications`, {
        subscriberId: user.id,
        message,
      })
    }

    console.log("All notifications sent")
  } catch {
    console.log("Error")
  }
}
