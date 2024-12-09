import { Marca} from "dominio/modelos/marca";
import { RepositorioMarca } from "dominio/repositorios/repositorio_marca";

export class CrearMarcaCasoUso {
  constructor(private repositorio: RepositorioMarca) {}

  async ejecutar(id: string, nombre: string): Promise<void> {
    const nuevaMarca = new Marca(id, nombre);
    await this.repositorio.crear(nuevaMarca);
  }
}
