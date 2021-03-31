import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'group',
})
export class Groups extends Model<Groups> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  name: string;
}
