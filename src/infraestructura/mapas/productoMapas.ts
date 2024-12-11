// infraestructura/mapas/productoMapper.ts
import { Producto } from 'dominio/modelos/producto';
import { ProductoSequelize } from 'infraestructura/modelos/productoSequelize';

// Convertir de Sequelize a dominio
export const toProductoDomain = (productoSequelize: ProductoSequelize): Producto => {
  return new Producto(productoSequelize.nombre, productoSequelize.cantidad, productoSequelize.descripcion);
};

// Convertir de dominio a Sequelize
export const toProductoSequelize = (producto: Producto): Partial<ProductoSequelize> => {
  return {
    nombre: producto.nombre,
    cantidad: producto.cantidad,
    descripcion: producto.descripcion,
  };
};
