import { RepositorioCategoria } from "dominio/repositorios/repositorio_categoria";

export class EliminarCategoriaCasoUso {
  constructor(private repositorio: RepositorioCategoria) {}

  async ejecutar(id: string): Promise<void> {
    const categoria = await this.repositorio.buscarPorId(id);
    if (!categoria) {
      throw new Error("Categoría no encontrada");
    }
    await this.repositorio.eliminar(id);
  }
}
