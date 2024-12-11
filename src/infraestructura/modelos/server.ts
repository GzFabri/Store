import express, { Request, Response, NextFunction } from 'express';
import { ProductoSequelize } from 'infraestructura/modelos/productoSequelize'; 
import sequelize from 'infraestructura/modelos/sequelize';
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());


app.get('/productos', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productos = await ProductoSequelize.findAll();
    res.status(200).json(productos);
  } catch (error) {
    next(error); 
  }
});


app.post('/productos', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const nuevoProducto = await ProductoSequelize.create(req.body); 
    res.status(201).json(nuevoProducto); 
  } catch (error) {
    next(error); 
  }
});


app.patch('/productos/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const producto = await ProductoSequelize.findByPk(req.params.id); 
    if (producto) {
      await producto.update(req.body); 
      res.status(200).json(producto); 
    } else {
      res.status(404).json({ error: 'Producto no encontrado' }); 
    }
  } catch (error) {
    next(error); 
  }
});


app.delete('/productos/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const producto = await ProductoSequelize.findByPk(req.params.id); 
    if (producto) {
      await producto.destroy(); 
      res.status(204).send(); 
    } else {
      res.status(404).json({ error: 'Producto no encontrado' }); 
    }
  } catch (error) {
    next(error); 
  }
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
