import { DataTypes, Model, Sequelize } from "sequelize";
import { CategoriaId } from "./categoria-id";
import { CategoriaNombre } from "./categoria-nombre";


export interface CategoriaAttributes {
  id: number;
  nombre: string;
}


export class Categoria extends Model<CategoriaAttributes> implements CategoriaAttributes {
  public id!: number;
  public nombre!: string;


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  
  getId(): CategoriaId {
    return new CategoriaId(this.id);
  }

  setId(value: CategoriaId): void {
    this.id = value.getValue();
  }

  getNombre(): CategoriaNombre {
    return new CategoriaNombre(this.nombre);
  }

  setNombre(value: CategoriaNombre): void {
    this.nombre = value.getValue();
  }
}


export const initCategoriaModel = (sequelize: Sequelize): typeof Categoria => {
  Categoria.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "categorias",
      timestamps: true,
      hooks: {
        afterFind: (result: any) => {
          if (!result) return;

          if (Array.isArray(result)) {
            result.forEach((item) => {
              item.id = new CategoriaId(item.id).getValue();
              item.nombre = new CategoriaNombre(item.nombre).getValue();
            });
          } else {
            result.id = new CategoriaId(result.id).getValue();
            result.nombre = new CategoriaNombre(result.nombre).getValue();
          }
        },
      },
    }
  );
  return Categoria;
};

