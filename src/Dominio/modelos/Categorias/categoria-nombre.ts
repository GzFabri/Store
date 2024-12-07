export class CategoriaNombre {
    private readonly value: string;
  
    constructor(value: string) {
      if (!value || value.trim().length === 0) {
        throw new Error("El nombre de la categoría no puede estar vacío");
      }
      this.value = value;
    }
  
    public getValue(): string {
      return this.value;
    }
  }
  