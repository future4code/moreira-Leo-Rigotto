import express from "express"

import { AddressInfo } from "net"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

app.get("/ping", (req, res) => {
  res.send("Pong!")
})

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const todoList: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 2,
    id: 27,
    title: "veritatis pariatur delectus",
    completed: true,
  },
  {
    userId: 2,
    id: 28,
    title: "nesciunt totam sit blanditiis sit",
    completed: false,
  },
  {
    userId: 2,
    id: 29,
    title: "laborum aut in quam",
    completed: false,
  },
  {
    userId: 2,
    id: 30,
    title:
      "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
    completed: true,
  },
  {
    userId: 3,
    id: 58,
    title: "est dicta totam qui explicabo doloribus qui dignissimos",
    completed: false,
  },
  {
    userId: 3,
    id: 59,
    title: "perspiciatis velit id laborum placeat iusto et aliquam odio",
    completed: false,
  },
  {
    userId: 3,
    id: 60,
    title: "et sequi qui architecto ut adipisci",
    completed: true,
  },
  {
    userId: 4,
    id: 61,
    title: "odit optio omnis qui sunt",
    completed: true,
  },
  {
    userId: 4,
    id: 62,
    title: "et placeat et tempore aspernatur sint numquam",
    completed: false,
  },
  {
    userId: 4,
    id: 63,
    title: "doloremque aut dolores quidem fuga qui nulla",
    completed: true,
  },
  {
    userId: 4,
    id: 64,
    title: "voluptas consequatur qui ut quia magnam nemo esse",
    completed: false,
  },
  {
    userId: 4,
    id: 65,
    title: "fugiat pariatur ratione ut asperiores necessitatibus magni",
    completed: false,
  },
  {
    userId: 4,
    id: 66,
    title: "rerum eum molestias autem voluptatum sit optio",
    completed: false,
  },
]

app.get("/todos", (req, res) => {
    if (req.query.done === "true") {
        const done = todoList.filter((todo) => {
            return todo.completed
        }).map((todo) => {
            return todo
        })
        res.send(done)
    } else if (req.query.done === "false") {
        const notDone = todoList.filter((todo) => {
            return !todo.completed
        }).map((todo) => {
            return todo
        })
        res.send(notDone)
    }   else res.send(todoList)
})

app.post("/todos", (req, res) => {
    if (req.body) {
        todoList.push(req.body)
        res.send(todoList)
    } else res.send('Você deve fornecer uma tarefa')
})