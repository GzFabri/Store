import { Producto } from "../modelos/producto";

export interface RepositorioProducto {
  crear(producto: Producto): Promise<void>;
  actualizar(producto: Producto): Promise<void>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Producto | null>;
}
