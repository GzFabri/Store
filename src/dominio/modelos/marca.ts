export class Marca {
  readonly id: string;
  readonly nombre: string;

  constructor(id: string, nombre: string) {
    
    if (!id || id.trim() === '') {
      throw new Error('El ID de la marca no puede estar vacío.');
    }

    if (!nombre || nombre.trim() === '') {
      throw new Error('El nombre de la marca no puede estar vacío.');
    }

    if (nombre.length > 100) {
      throw new Error('El nombre de la marca no puede exceder los 100 caracteres.');
    }

    this.id = id;
    this.nombre = nombre;
  }

  actualizarNombre(nuevoNombre: string): Marca {
    if (!nuevoNombre || nuevoNombre.trim() === '') {
      throw new Error('El nuevo nombre de la marca no puede estar vacío.');
    }

    if (nuevoNombre.length > 100) {
      throw new Error('El nuevo nombre de la marca no puede exceder los 100 caracteres.');
    }

    return new Marca(this.id, nuevoNombre);
  }
}

  