import { Request, Response } from "express";
import client from "../client";

export class CreateProductivityController {
  async create(req: Request, res:Response){
    try {
      const {doctor_id} = req.params

      const selectDoctorQuery = `SELECT * FROM doctors WHERE id = ${doctor_id}`
      const selectDoctor = await client.query(selectDoctorQuery)
      
      if(!selectDoctor.rows[0]) {
        return res.status(404).json({message: 'Médico não encontrado'})
      }

      const {service_at, value, description} = req.body
      const postProductivitiesQuery = {
        text: `
          INSERT INTO productivities 
            (service_at, value, description, doctor_id) 
          VALUES 
            ($1, $2, $3, $4)
          RETURNING *
        `,
        values: [ service_at, value, description, doctor_id]
      }

      const {rows} = await client.query(postProductivitiesQuery)
      return res.status(200).json(rows[0])
    } catch (error) {
      console.error(error)
      return res.status(500).json({message: 'Erro no servidor'})
    }
  }
}