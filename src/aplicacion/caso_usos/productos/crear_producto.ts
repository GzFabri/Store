import { Producto } from 'dominio/modelos/producto';
import { RepositorioProducto } from 'dominio/repositorios/repositorio_producto';

export class CrearProductoCasoDeUso {
  constructor(private readonly repositorioProducto: RepositorioProducto) {}

  async ejecutar(
    nombre: string,
    cantidad: number,
    descripcion: string
    
  ): Promise<Producto> {
    const nuevoProducto = new Producto(nombre, cantidad, descripcion);
    return await this.repositorioProducto.crear(nuevoProducto);
  }
}
