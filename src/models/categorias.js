import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const categorias =sequelize.define( 'categorias', {
   id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
});