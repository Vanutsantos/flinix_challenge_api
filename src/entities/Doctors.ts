import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users";

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number

  @Column({
    type: 'varchar',
    length: 45,
  })
  name: string 
    
  @Column({
    type: 'varchar',
    length: 45,
  })
  crm: string

  
  @Column({type: 'int'})
  created_by: User
}