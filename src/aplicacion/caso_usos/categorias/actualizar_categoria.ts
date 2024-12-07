import { CategoriaRepositorio } from '../repositorios/categoria.repositorio';

export class ActualizarCategoriaCasoDeUso {
  constructor(private readonly categoriaRepositorio: CategoriaRepositorio) {}

  async ejecutar(id: string, datos: { nombre?: string }): Promise<void> {
    await this.categoriaRepositorio.actualizar(id, datos);
  }
}
