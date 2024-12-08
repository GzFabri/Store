export class Categoria {
    constructor(
      public readonly id: string,
      public nombre: string
    ) {}
  
    /**
     * Actualiza el nombre de la categoría.
     * @param nuevoNombre - El nuevo nombre de la categoría.
     */
    actualizarNombre(nuevoNombre: string): void {
      if (!nuevoNombre || nuevoNombre.trim().length === 0) {
        throw new Error("El nombre de la categoría no puede estar vacío.");
      }
      this.nombre = nuevoNombre.trim();
    }
  }
  