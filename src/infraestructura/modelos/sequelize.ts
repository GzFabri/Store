import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tienda_maquillaje',
    logging: false,
    models: [UserModel], // Agrega los modelos aquí
  });
  
  export default sequelize;