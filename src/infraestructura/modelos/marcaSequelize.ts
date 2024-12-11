
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'marcas',
  timestamps: false,
})
export class MarcaSequelize extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [1, 100],
    },
  })
  nombre!: string;
}
