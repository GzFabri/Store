import app from './app.js';
import {sequelize} from './database/database.js';


import './models/productos.js';
import './models/marcas.js';
import './models/categorias.js';

/*
sequelize.sync()
.then(() => {
    console.log('Tablas sincronizadas con la base de datos');
})
.catch((error) => {
    console.error('Error al sincronizar las tablas:', error);
});*/

/*
sequelize.authenticate()
.then(() => {
    
    console.log('Conexión exitosa a la base de datos');
})
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});
*/

app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto 4000`);
});
 