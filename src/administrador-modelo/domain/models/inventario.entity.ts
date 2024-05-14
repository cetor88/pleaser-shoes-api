export interface IInventarioDB {
  idInventario: number;
  idModelo: number;
  idImagen: string;
  idFactura: number;
  talla: number;
  precioCompra: number;
  precioSugerido: number;
  precioVenta: number;
  ajustePrecio: number;
  estaVendida: number;
  fechaInventario: Date;
}
