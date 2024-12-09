import { RepositorioMarca} from "dominio/repositorios/repositorio_marca";

export class EliminarMarcaCasoUso {
  constructor(private repositorio: RepositorioMarca) {}

  async ejecutar(id: string): Promise<void> {
    const marca = await this.repositorio.buscarPorId(id);
    if (!marca) {
      throw new Error("marca no encontrada");
    }
    await this.repositorio.eliminar(id);
  }
}

