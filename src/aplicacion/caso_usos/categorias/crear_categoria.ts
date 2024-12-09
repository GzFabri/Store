import { Categoria } from "dominio/modelos/categoria";
import { RepositorioCategoria } from "dominio/repositorios/repositorio_categoria";

export class CrearCategoriaCasoUso {
  constructor(private repositorio: RepositorioCategoria) {}

  async ejecutar(id: string, nombre: string): Promise<void> {
    const nuevaCategoria = new Categoria(id, nombre);
    await this.repositorio.crear(nuevaCategoria);
  }
}

