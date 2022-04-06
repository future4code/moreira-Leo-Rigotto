import connection from "./connection"
import app from "./app"
import { Request, Response } from "express"

// get actor by name
app.get("/actor/:name", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(
      `SELECT * FROM Actor WHERE name LIKE "%${req.params.name}%";`
    )
    res.send(result[0].length === 1 ? result[0][0] : result[0])
  } catch (error: any) {
    res.send(error.message)
  }
})

// count actors by gender
app.get("/actor",async (req:Request, res: Response) => {
  try {
    const result = await connection.raw(
      `SELECT COUNT(gender), gender FROM Actor WHERE gender = "${req.query.gender}"`
    )
    res.send(result[0])
  } catch (error: any) {
    res.send(error.message)
  }
})

