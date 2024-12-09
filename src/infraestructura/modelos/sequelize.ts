import { Categoria } from "dominio/modelos/categoria";
import { Marca } from "dominio/modelos/marca";
import { Producto } from "dominio/modelos/producto";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tienda_maquillaje',
    logging: false,
    models: [Categoria,Marca,Producto], // Agrega los modelos aquí
  });
  
  export default sequelize;
  

  