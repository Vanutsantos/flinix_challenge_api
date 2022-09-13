import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Doctor } from "./Doctors";

@Entity('productivities')
export class Productivities  {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number

  @Column({
    type: 'timestamp',
    nullable: false,
    default: "now()"
  })
  service_at: string 

  @Column({
    type: 'decimal',
    nullable: false,
  })
  value: string 
    
  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
  })
  description: string

  @ManyToOne(() => Doctor, (doctors) => doctors.id, {
    nullable: true
  })
  @JoinColumn({name: 'doctor_id'})
  doctor_id: Doctor
}