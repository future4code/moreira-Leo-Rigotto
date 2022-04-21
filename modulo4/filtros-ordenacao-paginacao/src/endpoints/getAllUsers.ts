import { Request, Response } from "express"
import selectAllUsers from "./selectAllUsers"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    let statusCode = 200
    try {
     const users = await selectAllUsers()

     if(!users.length){
        statusCode = 404
        throw new Error("No users found")
     }

     res.status(statusCode).send(users)
     
  } catch (error: any) {
     console.log(error)
     res.status(statusCode).send(error.message || error.sqlMessage)
  }
}