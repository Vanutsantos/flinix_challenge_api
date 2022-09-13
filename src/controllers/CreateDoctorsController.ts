import { Request, Response } from "express";
import client from "../client";

export class CreateDoctorsController {
  async create(req: Request, res:Response){
    try {
      const {name = null, crm = null, user_id: created_by_id = null} = req.body
      const query = {
        text: 'INSERT INTO doctors (name, crm, created_by_id) VALUES ($1, $2, $3) RETURNING *',
        values: [name, crm, created_by_id]
      }
      const {rows} = await client.query(query)
      return res.status(200).json(rows[0])
    } catch (error) {
      console.error(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }
}


