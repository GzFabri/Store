import { DataTypes } from "sequelize";
import { sequelize} from "../database/database.js";
import { categorias } from "./categorias.js";
import { marcas } from "./marcas.js";

export const productos = sequelize.define( 'productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true, 
});


