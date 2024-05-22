/* eslint-disable prettier/prettier */
export default interface IZapatillaDB {
    idZapatilla: number;
    idImagen: number;
    idModelo: string;
    idTalla: number;
    idFactura: number;
    precioCompra: number;
    precioSugerido: number;
    precioVenta: number;
    disponibilidad: number;
    banVendido: boolean;
}
