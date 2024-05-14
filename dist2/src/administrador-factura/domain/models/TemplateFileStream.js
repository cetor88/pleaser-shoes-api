"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateFileStream = void 0;
class TemplateFileStream {
    constructor(modelo, descripcion, imageFull, imageThumbnail, precioCompra, precioSugerido, tallas, nombre) {
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
exports.TemplateFileStream = TemplateFileStream;
