/* eslint-disable prettier/prettier */
export class TemplateFileStream {
    id?:number;
    modelo: string;
    descripcion: string;
    imageFull: string;
    imageThumbnail: string;
    precioCompra: string;
    precioSugerido: string;
    tallas: string | Array<number>;
    nombre?:string;


    constructor( modelo: string, descripcion: string,
                 imageFull: string, imageThumbnail: string,
                 precioCompra: string, precioSugerido: string,
                 tallas: Array<number>, nombre:string
        ){
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.imageFull = imageFull;
        this.imageThumbnail = imageThumbnail;
        this.precioCompra = precioCompra;
        this.precioSugerido = precioSugerido;
        this.tallas = tallas;
        this.nombre = nombre;
    }
}