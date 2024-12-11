import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'categorias',
  timestamps: false,
})
export class CategoriaSequelize extends Model {
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
