export class Producto {
  readonly nombre: string;
  readonly cantidad: number;
  readonly descripcion: string;

  constructor(nombre: string, cantidad: number, descripcion: string) {
    if (!nombre || nombre.trim() === '') {
      throw new Error('El nombre del producto no puede estar vacío.');
    }

    if (cantidad < 0) {
      throw new Error('La cantidad no puede ser negativa.');
    }

    if (!descripcion || descripcion.trim() === '') {
      throw new Error('La descripción no puede estar vacía.');
    }

    this.nombre = nombre;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
  }

  actualizarNombre(nuevoNombre: string): Producto {
    if (!nuevoNombre || nuevoNombre.trim() === '') {
      throw new Error('El nuevo nombre no puede estar vacío.');
    }
    return new Producto(nuevoNombre, this.cantidad, this.descripcion);
  }

  actualizarDescripcion(nuevaDescripcion: string): Producto {
    if (!nuevaDescripcion || nuevaDescripcion.trim() === '') {
      throw new Error('La nueva descripción no puede estar vacía.');
    }
    return new Producto(this.nombre, this.cantidad, nuevaDescripcion);
  }

  actualizarCantidad(nuevaCantidad: number): Producto {
    if (nuevaCantidad < 0) {
      throw new Error('La cantidad no puede ser negativa.');
    }
    return new Producto(this.nombre, nuevaCantidad, this.descripcion);
  }
}



  