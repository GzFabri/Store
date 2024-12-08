import { Producto } from '../../dominio/producto';
import { ProductoRepositorio } from '../repositorios/producto.repositorio';

export class CrearProductoCasoDeUso {
  constructor(private readonly productoRepositorio: ProductoRepositorio) {}

  async ejecutar(
    nombre: string,
    cantidad: number,
    descripcion: string,
    marcaId: string,
    categoriaId: string
  ): Promise<Producto> {
    const nuevoProducto = new Producto(nombre, cantidad, descripcion, marcaId, categoriaId);
    return await this.productoRepositorio.crear(nuevoProducto);
  }
}
