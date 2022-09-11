import { Request, Response } from "express";
import client from "../client";

export class CreateDoctorsController {
  async create(req: Request, res:Response){
    try {
      const {name, crm, user_id: created_by} = req.body

      const selectUserQuery = `SELECT * FROM users WHERE id = ${created_by}`
      const selectUser = await client.query(selectUserQuery)
      if(!selectUser.rows[0]) {
        return res.status(404).json({message: 'Usuário não encontrado'})
      }

      const postDoctorQuery = {
        text: 'INSERT INTO doctors (name, crm, created_by) VALUES ($1, $2, $3) RETURNING *',
        values: [ name, crm, created_by]
      }
      const {rows} = await client.query(postDoctorQuery)
      return res.status(200).json({
        ...rows[0],
        created_by: selectUser.rows[0]
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({message: 'Erro no servidor'})
    }
  }
}