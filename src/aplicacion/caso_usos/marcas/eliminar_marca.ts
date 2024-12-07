import { MarcaRepositorio } from '../repositorios/marca.repositorio';

export class EliminarMarcaCasoDeUso {
  constructor(private readonly marcaRepositorio: MarcaRepositorio) {}

  async ejecutar(id: string): Promise<void> {
    await this.marcaRepositorio.eliminar(id);
  }
}
