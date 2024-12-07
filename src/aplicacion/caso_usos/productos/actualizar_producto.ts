import { ProductoRepositorio } from '../repositorios/producto.repositorio';

export class ActualizarProductoCasoDeUso {
  constructor(private readonly productoRepositorio: ProductoRepositorio) {}

  async ejecutar(
    id: string,
    datos: { nombre?: string; cantidad?: number; descripcion?: string; marcaId?: string; categoriaId?: string }
  ): Promise<void> {
    await this.productoRepositorio.actualizar(id, datos);
  }
}
