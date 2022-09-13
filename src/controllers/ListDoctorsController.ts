import { Request, Response } from "express";
import client from "../client";

export class ListDoctorsController {
  async list(req: Request, res:Response){
    try {
      const query = 'SELECT * FROM doctors'
      const data = await client.query(query)
      return res.status(200).json(data.rows)
    } catch (error) {
      console.error(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }
}