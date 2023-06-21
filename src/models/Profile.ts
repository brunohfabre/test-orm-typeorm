import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Profile {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}