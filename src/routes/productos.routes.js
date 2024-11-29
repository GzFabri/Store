import { Router } from "express";
import { getproductos, createproducto} from "../controllers/productos.controllers.js";


const routes = Router();

routes.get('/productos', getproductos);
routes.post('/producto', createproducto);
routes.put('/productos');
routes.patch('/productos/:id');
routes.delete('/productos/:id');
routes.get('/productos/:id');

export default routes;

