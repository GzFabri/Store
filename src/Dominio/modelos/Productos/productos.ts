import { DataTypes, Model, Sequelize } from "sequelize";
import { ProductoId } from "./producto-id";
import { ProductoNombre } from "./producto-nombre";
import { ProductoDescripcion } from "./producto-descripcion";
import { ProductoCantidad } from "./producto-cantidad";

// Interfaz que define la estructura de la entidad
export interface ProductoAttributes {
  id: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
}

// Clase que extiende Model para la entidad "productos"
export class Producto extends Model<ProductoAttributes> implements ProductoAttributes {
  public id!: number;
  public nombre!: string;
  public descripcion!: string;
  public cantidad!: number;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Métodos para trabajar con Value Objects
  getId(): ProductoId {
    return new ProductoId(this.id);
  }

  setId(value: ProductoId): void {
    this.id = value.getValue();
  }

  getNombre(): ProductoNombre {
    return new ProductoNombre(this.nombre);
  }

  setNombre(value: ProductoNombre): void {
    this.nombre = value.getValue();
  }

  getDescripcion(): ProductoDescripcion {
    return new ProductoDescripcion(this.descripcion);
  }

  setDescripcion(value: ProductoDescripcion): void {
    this.descripcion = value.getValue();
  }

  getCantidad(): ProductoCantidad {
    return new ProductoCantidad(this.cantidad);
  }

  setCantidad(value: ProductoCantidad): void {
    this.cantidad = value.getValue();
  }
}

// Función para inicializar el modelo
export const initProductoModel = (sequelize: Sequelize): typeof Producto => {
  Producto.init(
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
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "productos",
      timestamps: true,
      hooks: {
        afterFind: (result: any) => {
          if (!result) return;

          if (Array.isArray(result)) {
            result.forEach((item) => {
              item.id = new ProductoId(item.id).getValue();
              item.nombre = new ProductoNombre(item.nombre).getValue();
              item.descripcion = new ProductoDescripcion(item.descripcion).getValue();
              item.cantidad = new ProductoCantidad(item.cantidad).getValue();
            });
          } else {
            result.id = new ProductoId(result.id).getValue();
            result.nombre = new ProductoNombre(result.nombre).getValue();
            result.descripcion = new ProductoDescripcion(result.descripcion).getValue();
            result.cantidad = new ProductoCantidad(result.cantidad).getValue();
          }
        },
      },
    }
  );
  return Producto;
};

