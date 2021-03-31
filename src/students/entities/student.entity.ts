import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Groups } from './group.entity';

@Table({
  tableName: 'students',
})
export class Student extends Model<Student> {
  @PrimaryKey
  @ForeignKey(() => Groups)
  @Column({ autoIncrement: true })
  id: number;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  group_id: number;
}
