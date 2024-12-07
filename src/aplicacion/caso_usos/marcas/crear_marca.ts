import { Marca } from '../../dominio/marca';
import { MarcaRepositorio } from '../repositorios/marca.repositorio';

export class CrearMarcaCasoDeUso {
  constructor(private readonly marcaRepositorio: MarcaRepositorio) {}

  async ejecutar(nombre: string ): Promise<Marca> {
    const nuevaMarca = new Marca(nombre);
    return await this.marcaRepositorio.crear(nuevaMarca);
  }
}
