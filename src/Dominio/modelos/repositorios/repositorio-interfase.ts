export interface IRepository<T, ID> {
    ver(id: ID): Promise<T | null>;
    crear(modelo: T): Promise<void>;
    actualizar(id: ID, modelo: Partial<T>): Promise<void>;
    eliminar(id: ID): Promise<void>;
  }
  