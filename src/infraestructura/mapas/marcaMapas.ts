// infraestructura/mapas/marcaMapper.ts
import { Marca } from 'dominio/modelos/marca';
import { MarcaSequelize } from 'infraestructura/modelos/marcaSequelize';

// Convertir de Sequelize a dominio
export const toMarcaDomain = (marcaSequelize: MarcaSequelize): Marca => {
  return new Marca(marcaSequelize.id, marcaSequelize.nombre);
};

// Convertir de dominio a Sequelize
export const toMarcaSequelize = (marca: Marca): Partial<MarcaSequelize> => {
  return {
    id: marca.id,
    nombre: marca.nombre,
  };
};
