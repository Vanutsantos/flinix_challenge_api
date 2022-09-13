import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users";

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number

  @Column({
    type: 'varchar',
    length: 45,
    nullable: true
  })
  name: string 
    
  @Column({
    type: 'varchar',
    length: 45,
    nullable: true
  })
  crm: string

  @ManyToOne(() => User, (users) => users.id, {
    nullable: true
  })
  @JoinColumn({name: 'created_by_id'})
  created_by_id: User
}