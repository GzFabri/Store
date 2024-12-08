export class Producto {
    constructor(
      public readonly id: string,
      public nombre: string,
      public precio: number,
      public categoriaId: string,
      public marcaId: string
    ) {}
  
    /**
     * Actualiza el nombre del producto.
     * @param nuevoNombre - El nuevo nombre del producto.
     */
    actualizarNombre(nuevoNombre: string): void {
      if (!nuevoNombre || nuevoNombre.trim().length === 0) {
        throw new Error("El nombre del producto no puede estar vacío.");
      }
      this.nombre = nuevoNombre.trim();
    }
  
    /**
     * Actualiza el precio del producto.
     * @param nuevoPrecio - El nuevo precio del producto.
     */
    actualizarPrecio(nuevoPrecio: number): void {
      if (nuevoPrecio <= 0) {
        throw new Error("El precio del producto debe ser mayor a 0.");
      }
      this.precio = nuevoPrecio;
    }
  }
  