import { Categoria } from '../../dominio/categoria';
import { CategoriaRepositorio } from '../repositorios/categoria.repositorio';

export class CrearCategoriaCasoDeUso {
  constructor(private readonly categoriaRepositorio: CategoriaRepositorio) {}

  async ejecutar(nombre: string,): Promise<Categoria> {
    const nuevaCategoria = new Categoria(nombre);
    return await this.categoriaRepositorio.crear(nuevaCategoria);
  }
}
