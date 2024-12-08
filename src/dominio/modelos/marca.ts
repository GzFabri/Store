export class Marca {
    constructor(
      public readonly id: string,
      public nombre: string
    ) {}
  
    /**
     * Actualiza el nombre de la marca.
     * @param nuevoNombre - El nuevo nombre de la marca.
     */
    actualizarNombre(nuevoNombre: string): void {
      if (!nuevoNombre || nuevoNombre.trim().length === 0) {
        throw new Error("El nombre de la marca no puede estar vacío.");
      }
      this.nombre = nuevoNombre.trim();
    }
  }
  