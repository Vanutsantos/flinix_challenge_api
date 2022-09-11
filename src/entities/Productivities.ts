import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Doctor } from "./Doctors";

@Entity('productivities')
export class Productivities  {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number

  @Column({type: 'timestamp'})
  service_at: string 

  @Column({type: 'decimal'})
  value: string 
    
  @Column({
    type: 'varchar',
    length: 255,
  })
  description: string
  
  @Column({type: 'int'})
  doctor_id: Doctor
}