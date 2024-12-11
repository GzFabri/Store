import express, { Request, Response, NextFunction } from 'express';
import sequelize from 'infraestructura/modelos/sequelize'; 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('¡Servidor corriendo correctamente!');
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});


export const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');

    await sequelize.sync({ alter: true });
    console.log('Base de datos sincronizada.');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};
