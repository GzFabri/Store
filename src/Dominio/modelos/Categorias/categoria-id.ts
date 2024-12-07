export class CategoriaId {
    private readonly value: number;
  
    constructor(value: number) {
      if (value <= 0) {
        throw new Error("El ID de la categoría debe ser mayor que 0");
      }
      this.value = value;
    }
  
    public getValue(): number {
      return this.value;
    }
  }
  