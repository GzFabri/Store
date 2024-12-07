export class ProductoId {
    private readonly value: number;
  
    constructor(value: number) {
      if (value <= 0) {
        throw new Error("El ID del producto debe ser mayor que 0.");
      }
      this.value = value;
    }
  
    public getValue(): number {
      return this.value;
    }
  }
  