import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { users, Users } from "./data"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    res.send(users)
  } catch (error) {
    res.status(errorCode).send(error)
  }
})

app.get("/user", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    if (req.query.type) {
      switch (req.query.type) {
        case "ADMIN":
          res.send(
            users
              .filter((user) => user.type === req.query.type)
              .map((user) => user)
          )
          break
        case "NORMAL":
          res.send(
            users
              .filter((user) => user.type === req.query.type)
              .map((user) => user)
          )
          break
        default:
          errorCode = 422
          throw new Error("Envie um type válido")
      }
    } else if (req.query.name) {
      const newUsers = users
        .filter((user) => user.name === req.query.name)
        .map((user) => user)
      if (newUsers.length === 0) {
        errorCode = 404
        throw new Error("Nenhum usuário com esse nome foi encontrado")
      } else res.send(newUsers)
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    if (typeof req.body === typeof users[0]) {
      users.push(req.body)
      res.send(users)
    } else {
      errorCode = 422
      throw new Error("É necessário enviar um usuário válido")
    }
  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})
