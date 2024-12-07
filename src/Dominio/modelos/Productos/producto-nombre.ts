export class ProductoNombre {
    private readonly value: string;
  
    constructor(value: string) {
      if (value.trim().length === 0) {
        throw new Error("El nombre del producto no puede estar vacío.");
      }
      this.value = value;
    }
  
    public getValue(): string {
      return this.value;
    }
  }
  