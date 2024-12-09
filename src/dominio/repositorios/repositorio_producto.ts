import { Producto } from "dominio/modelos/producto";

export interface RepositorioProducto {
  crear(producto: Producto): Promise<Producto>;  
  actualizar(producto: Producto): Promise<void>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Producto | null>;
}
