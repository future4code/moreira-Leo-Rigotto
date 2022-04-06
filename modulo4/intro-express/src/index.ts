import express from "express"
import cors from "cors"

type User = {
  id: number
  name: string
  phone: string
  email: string
  website: string
}

const userBase: User[] = [
  {
    id: 1,
    name: "Léo Sala Rigotto",
    phone: "(11)9090-9090",
    email: "leo@leo.com",
    website: "github.com/larrygotto",
  },
  {
    id: 2,
    name: "Fefa",
    phone: "(11)9090-9090",
    email: "fefa@fefa.com",
    website: "github.com/fefa",
  },
  {
    id: 3,
    name: "Letis",
    phone: "(11)9090-9090",
    email: "lele@lele.com",
    website: "github.com/lele",
  },
  {
    id: 4,
    name: "Betinha",
    phone: "(11)9090-9090",
    email: "braba@demais.com",
    website: "github.com/bete",
  },
  {
    id: 5,
    name: "Tarsila",
    phone: "(11)9090-9090",
    email: "opera@felina.com",
    website: "github.com/tarsi",
  },
  {
    id: 6,
    name: "Caetano",
    phone: "(11)9090-9090",
    email: "cremoso@demais.com",
    website: "github.com/cae",
  },
]

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

const postsBase: Post[] = [
  {
    id: 1,
    title: "Opa",
    body: "Beleza?",
    userId: 1,
  },  {
    id: 2,
    title: "iiiiih",
    body: "Beleza?",
    userId: 3,
  },
]

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.get("/users", (req, res) => {
  res.send(userBase)
})

app.get("/posts", (req, res) => {
  req.query.id
    ? res.send(postsBase.map((post) => {
        if (Number(req.query.id) === post.userId) return post
      }))
    : res.send(postsBase)
})
