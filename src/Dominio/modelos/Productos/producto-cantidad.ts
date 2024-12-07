export class ProductoCantidad {
    private readonly value: number;
  
    constructor(value: number) {
      if (value < 0) {
        throw new Error("La cantidad del producto no puede ser negativa.");
      }
      this.value = value;
    }
  
    public getValue(): number {
      return this.value;
    }
  }
  