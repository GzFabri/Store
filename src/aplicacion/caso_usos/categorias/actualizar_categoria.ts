import { Categoria } from "dominio/modelos/categoria";
import { RepositorioCategoria } from "dominio/repositorios/repositorio_categoria";

export class ActualizarCategoriaCasoUso {
  constructor(private repositorio: RepositorioCategoria) {}

  async ejecutar(id: string, nuevoNombre: string): Promise<void> {
    const categoria = await this.repositorio.buscarPorId(id);
    if (!categoria) {
      throw new Error("Categoría no encontrada");
    }
    categoria.actualizarNombre(nuevoNombre);
    await this.repositorio.actualizar(categoria);
  }
}
