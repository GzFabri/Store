import { Marca } from "dominio/modelos/marca";
import { RepositorioMarca } from "dominio/repositorios/repositorio_marca";

export class ActualizarMarcaCasoUso {
  constructor(private repositorio: RepositorioMarca) {}

  async ejecutar(id: string, nuevoNombre: string): Promise<void> {
    const marca = await this.repositorio.buscarPorId(id);
    if (!marca) {
      throw new Error("Marca no encontrada");
    }
    marca.actualizarNombre(nuevoNombre);
    await this.repositorio.actualizar(marca);
  }
}
