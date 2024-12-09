import { Producto } from "dominio/modelos/producto";
import { RepositorioProducto } from "dominio/repositorios/repositorio_producto";

export class ActualizarProductoCasoUso {
  constructor(private repositorio: RepositorioProducto) {}

  async ejecutar(
    id: string,
    nuevoNombre?: string,
    nuevaDescripcion?: string,
    nuevaCantidad?: number
  ): Promise<void> {
    const producto = await this.repositorio.buscarPorId(id);
    if (!producto) {
      throw new Error(`El producto con ID ${id} no existe.`);
    }

    if (nuevoNombre) producto.actualizarNombre(nuevoNombre);
    if (nuevaDescripcion) producto.actualizarDescripcion(nuevaDescripcion);
    if (nuevaCantidad !== undefined) producto.actualizarCantidad(nuevaCantidad);

    await this.repositorio.actualizar(producto);
  }
}



