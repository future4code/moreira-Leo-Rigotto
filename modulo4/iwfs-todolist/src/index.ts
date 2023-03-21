import express, { Express } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"

dotenv.config()

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
})

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

app.post("/user/", async (req, res) => {
  try {
    await connection.raw(`
    INSERT INTO TodoUsers (user_name, nickname, email)
    VALUES(
      "${req.body.name}",
      "${req.body.nickname}",
      "${req.body.email}")
    `)
    res.send('Success')
  } catch (error: any) {
    res.send(error)
  }
})

app.get('/user/:id', async (req, res) => {
  try {
    const user = await connection.raw(`
    SELECT id, nickname FROM TodoUsers WHERE id = ${req.params.id}
    `)
    if (user[0]) res.send(user[0])
    else throw new Error('Usuário não encontrado')
  } catch (error:any) {
    res.send(error)
  }
})

app.put('user//edit/:id', async (req, res) => {
  try {
    if (!req.body.name && req.body.nickname) throw new Error('Você deve enviar todos os dados')
    else {
      await connection.raw(`
      UPDATE TodoUsers SET user_name = ${req.body.name}, nickname= ${req.body.nickname} WHERE id = ${req.params.id}
      `)
      res.send('Success')
    }
  } catch (error: any) {
    res.send(error)
  }
})

app.post('/task/', async (req, res) => {
  try {
    await connection.raw(`
    INSERT INTO TodoTasks (title, description, requested_by, due_date)
    VALUES (
      ${req.body.title},
      ${req.body.description},
      ${req.body.userID},
      ${req.body.dueDate},
    );
    `)
    res.send('success')
  } catch (error: any) {
    res.send(error)
  }
})

app.get('/task/:id', async (req, res) => {
  try {
    const task = await connection.raw(`
    SELECT task_id, title, description, requested_by, due_date, status FROM TodoTasks WHERE task_id = ${req.params.id}
    `)
    if (task[0]) res.send(task[0])
    else throw new Error('Usuário não encontrado')
  } catch (error:any) {
    res.send(error)
  }
})