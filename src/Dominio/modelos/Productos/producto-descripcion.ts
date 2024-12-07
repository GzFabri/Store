export class ProductoDescripcion {
    private readonly value: string;
  
    constructor(value: string) {
      if (value.trim().length < 10) {
        throw new Error("La descripción del producto debe tener al menos 10 caracteres.");
      }
      this.value = value;
    }
  
    public getValue(): string {
      return this.value;
    }
  }
  