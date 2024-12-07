import { DataTypes, Model, Sequelize } from "sequelize";
import { MarcaId } from "./marca-id";
import { MarcaNombre } from "./marca-nombre";


export interface MarcaAttributes {
  id: number;
  nombre: string;
}


export class Marca extends Model<MarcaAttributes> implements MarcaAttributes {
  public id!: number;
  public nombre!: string;

  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  
  getId(): MarcaId {
    return new MarcaId(this.id);
  }

  setId(value: MarcaId): void {
    this.id = value.getValue();
  }

  getNombre(): MarcaNombre {
    return new MarcaNombre(this.nombre);
  }

  setNombre(value: MarcaNombre): void {
    this.nombre = value.getValue();
  }
}


export const initMarcaModel = (sequelize: Sequelize): typeof Marca => {
  Marca.init(
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
      modelName: "marcas",
      timestamps: true,
      hooks: {
        afterFind: (result: any) => {
          if (!result) return;

          if (Array.isArray(result)) {
            result.forEach((item) => {
              item.id = new MarcaId(item.id).getValue();
              item.nombre = new MarcaNombre(item.nombre).getValue();
            });
          } else {
            result.id = new MarcaId(result.id).getValue();
            result.nombre = new MarcaNombre(result.nombre).getValue();
          }
        },
      },
    }
  );
  return Marca;
};


