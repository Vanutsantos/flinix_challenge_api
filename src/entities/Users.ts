import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number

  @Column({
    type: 'varchar',
    length: 16,
    nullable: false
  })
  username: string

  @Column({
    type: 'varchar',
    length: 255,
  })
  email: string

  @Column({
    type: 'varchar',
    length: 16,
    nullable: false
  })
  password: string

  @Column({
    type: 'timestamp',
    default: "now()"
  })
  create_time: string
}