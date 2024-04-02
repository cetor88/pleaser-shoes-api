/* eslint-disable prettier/prettier */
export interface Imagen{
    idImagen: string;
    urlImagen: string;
    urlImagenThumbnail: string;
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

  export interface Factura{
    idFactura: number;
    idModelo: number;
    noFactura: string;
    talla: string;
    precioCompra: number;
    fechaFactura: Date;
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