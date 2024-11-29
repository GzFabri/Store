import Sequelize from 'sequelize';

 export const sequelize = new Sequelize('tienda_maquillaje', 'root', 'f4br1', {
    host: 'localhost',
    dialect: 'mysql'
});
