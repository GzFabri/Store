import { MarcaRepositorio } from '../repositorios/marca.repositorio';

export class ActualizarMarcaCasoDeUso {
  constructor(private readonly marcaRepositorio: MarcaRepositorio) {}

  async ejecutar(id: string, datos: { nombre?: string }): Promise<void> {
    await this.marcaRepositorio.actualizar(id, datos);
  }
}
