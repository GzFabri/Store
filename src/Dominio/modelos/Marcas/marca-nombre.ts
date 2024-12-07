export class MarcaNombre {
    private readonly value: string;
  
    constructor(value: string) {
      if (value.trim().length === 0) {
        throw new Error("El nombre de la marca no puede estar vacío");
      }
      if (value.length > 50) {
        throw new Error("El nombre de la marca no puede tener más de 50 caracteres");
      }
      this.value = value;
    }
  
    public getValue(): string {
      return this.value;
    }
  }
  