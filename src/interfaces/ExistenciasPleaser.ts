/* eslint-disable prettier/prettier */
export interface ExistenciasPleaser {
    id?: number;
    modelo?: string;
    descripcion?: string;
    precioCompra?: number | string;
    precioSugerido?: number | string;
    talla: number | string;
    nombre?:string;
    descuento?: number;
    estaDisponible?: boolean;
  }
  