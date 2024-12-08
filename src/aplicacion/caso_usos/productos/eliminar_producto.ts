import { ProductoRepositorio } from '../repositorios/producto.repositorio';

export class EliminarProductoCasoDeUso {
  constructor(private readonly productoRepositorio: ProductoRepositorio) {}

  async ejecutar(id: string): Promise<void> {
    await this.productoRepositorio.eliminar(id);
  }
}
