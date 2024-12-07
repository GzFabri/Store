import { IRepository } from "./repositorio-interfase";
;

export class GenericRepository<T, ID> implements IRepository<T, ID> {
  private readonly model: any;

  constructor(model: any) {
    this.model = model;
  }

  async ver(id: ID): Promise<T | null> {
    return await this.model.findByPk(id);
  }

  async crear(modelo: T): Promise<void> {
    await this.model.create(modelo);
  }

  async actualizar(id: ID, modelo: Partial<T>): Promise<void> {
    await this.model.update(modelo, { where: { id } });
  }

  async eliminar(id: ID): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}

