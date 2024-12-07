import { CategoriaRepositorio } from '../repositorios/categoria.repositorio';

export class EliminarCategoriaCasoDeUso {
  constructor(private readonly categoriaRepositorio: CategoriaRepositorio) {}

  async ejecutar(id: string): Promise<void> {
    await this.categoriaRepositorio.eliminar(id);
  }
}
