
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';

import { CategoriaSequelize } from 'infraestructura/modelos/categoriaSequelize'; 
import { MarcaSequelize } from 'infraestructura/modelos/marcaSequelize'; 
import { ProductoSequelize } from 'infraestructura/modelos/productoSequelize';

dotenv.config();

const sequelizeOptions: SequelizeOptions = {
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'tienda_maquillaje',
  logging: false,
  models: [CategoriaSequelize, MarcaSequelize, ProductoSequelize], 
};

const sequelizeInstance = new Sequelize(sequelizeOptions);  

export default sequelizeInstance;
