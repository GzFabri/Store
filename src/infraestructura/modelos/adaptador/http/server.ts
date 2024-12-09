import express, { Request, Response } from 'express';
import { UserService } from 'dominio/modelos/producto';
import { LoggerService } from 'infrastructure/services/logger-service';




export function createServer(userService: UserService, logger: LoggerService) {
    const app = express();
  
    // Middleware
    app.use(express.json());
  
    // Rutas
    app.get('/users', async (req: Request, res: Response) => {
      try {
        const users = await userService.getAllUsers();
        res.json(users);
      } catch (error) {
        logger.error('Error obteniendo usuarios:', error);
        res.status(500).send('Error interno del servidor');
      }
    });
  
    return app;
  }



