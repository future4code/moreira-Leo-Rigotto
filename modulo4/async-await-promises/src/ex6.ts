// a) executa todas as promises dentro de uma função.
// b) As notificações não precisam esperar a anterior ser enviada para começar seu processo de envio.
// c)

import axios from "axios"

type user = {
  id: string
  name: string
  email: string
}

const sendMessage = async (
  users: user[],
  message: string
): Promise<void> => {

	try {
	  const promises = users.map(user =>{
	    return axios.post(`${BASE_URL}notifications`, {
	      subscriberId: user.id,
	      message: message,
	    })
	  })
	
	  await Promise.all(promises);

	} catch {
		console.log("Error");
	}
};