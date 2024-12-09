import { Categoria } from "dominio/modelos/categoria";

export interface RepositorioCategoria {
  crear(categoria: Categoria): Promise<void>;
  actualizar(categoria: Categoria): Promise<void>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Categoria | null>;
}
