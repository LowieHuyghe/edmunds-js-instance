import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm'

@Entity()
export default class MyEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  text: string

}
