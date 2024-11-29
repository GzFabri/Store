import { DataTypes } from "sequelize";
import { sequelize} from "../database/database.js";

export const marcas = sequelize.define( 'marcas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
},  {
    timestamps: true,
});