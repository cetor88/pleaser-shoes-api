/* eslint-disable prettier/prettier */
export interface Imagen{
    idImagen: number;
    urlImagen: string;
    urlThumbnail: string;
  }

  export interface Usuario{
    idUsuario: number;
    nombre: string;
    apellidoPat: string;
    alias: string;
    correo: string;
    password: string;
    fechaAlta: Date;
  }

  export interface Modelo{
    idModelo: number;
    modelo: string;
    descripcion: string;
  }

  export interface Zapatilla{
    idZapatilla: number;
    idModelo: number;
    idImagen: number;
    idTalla: number;
    precioCompra: number;
    precioSugerido: number;
    banVendido: boolean;
  }

  export interface Inventario{
    idInventario: number;
    idModelo: number;
    idImagen: string;
    idFactura:  number;
    talla: number;
    precioCompra: number;
    precioSugerido: number;
    precioVenta: number;
    ajustePrecio: number;
    estaVendida: number;
    fechaInventario: Date;
  }

  export interface Venta{
    idVenta: number;
    idInventario: number;
    idUsuario: number;
    precioVenta: number;
    fechaVenta: Date;
    
  }