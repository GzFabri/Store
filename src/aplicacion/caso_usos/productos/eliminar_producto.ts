import { RepositorioProducto } from "dominio/repositorios/repositorio_producto";


export class EliminarProductoCasoUso {
  constructor(private repositorio: RepositorioProducto) {}

  async ejecutar(id: string): Promise<void> {
    const producto = await this.repositorio.buscarPorId(id);
    if (!producto) {
      throw new Error(`El producto con ID ${id} no existe.`);
    }
    await this.repositorio.eliminar(id);
  }
}
