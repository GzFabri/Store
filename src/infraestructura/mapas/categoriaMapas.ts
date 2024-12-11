import { Categoria } from 'dominio/modelos/categoria';
import { CategoriaSequelize } from 'infraestructura/modelos/categoriaSequelize';

// Convertir de Sequelize a dominio
export const toCategoriaDomain = (categoriaSequelize: CategoriaSequelize): Categoria => {
  return new Categoria(categoriaSequelize.id, categoriaSequelize.nombre);
};

// Convertir de dominio a Sequelize
export const toCategoriaSequelize = (categoria: Categoria): Partial<CategoriaSequelize> => {
  return {
    id: categoria.id,
    nombre: categoria.nombre,
  };
};
