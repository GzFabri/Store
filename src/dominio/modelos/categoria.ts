export class Categoria {
  readonly id: string;
  private _nombre: string;

  constructor(id: string, nombre: string) {
    if (!id.trim()) throw new Error('El ID no puede estar vacío.');
    if (!this.validarNombre(nombre)) throw new Error('Nombre inválido.');

    this.id = id;
    this._nombre = nombre.trim();
  }

  get nombre(): string {
    return this._nombre;
  }

  actualizarNombre(nuevoNombre: string): void {
    if (!this.validarNombre(nuevoNombre)) {
      throw new Error('El nuevo nombre no es válido.');
    }
    this._nombre = nuevoNombre.trim();
  }

  private validarNombre(nombre: string): boolean {
    return !!nombre && nombre.trim().length <= 100;
  }
}

