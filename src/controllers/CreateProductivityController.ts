import { Request, Response } from "express";
import client from "../client";

export class CreateProductivityController {
  async create(req: Request, res:Response){
    try {
      const {doctor_id = null} = req.params
      const {service_at, value, description = null} = req.body

      if(!service_at) return res.status(400).json({message: 'service_at is required'})
      if(!value) return res.status(400).json({message: 'value is required'})

      const query = {
        text: 'INSERT INTO productivities (service_at, value, description, doctor_id) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [ service_at, value, description, doctor_id]
      }
      const {rows} = await client.query(query)
      return res.status(200).json(rows[0])
    } catch (error) {
      console.error(error)
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }
}