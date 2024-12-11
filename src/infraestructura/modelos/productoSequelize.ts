
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'productos',
  timestamps: false,
})
export class ProductoSequelize extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 0, 
    },
  })
  cantidad!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  descripcion!: string;
}
