import { Marca } from "dominio/modelos/marca";

export interface RepositorioMarca {
  crear(marca: Marca): Promise<void>;
  actualizar(marca: Marca): Promise<void>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Marca | null>;
}
