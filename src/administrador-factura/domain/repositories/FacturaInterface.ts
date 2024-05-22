import IImagenDB from "src/administrador-modelo/domain/models/imagen.entity";
import IModeloDB from "src/administrador-modelo/domain/models/modelo.entity";

import { IFacturaDb } from "../models/factura.repository";
import { TemplateFileStream } from "../models/TemplateFileStream";

export interface IFacturaRepository {
  cargaCSV(): Promise<Array<TemplateFileStream>>; // 1.- funcion que el recupera el array del csv

  saveImagenFb(modeloCSV: TemplateFileStream): Promise<any>; // 3.- Carga en FB en el storage

  saveImagenDb(imagen: TemplateFileStream): Promise<IImagenDB>; // 4.- Almacena la imagen en el catalogo de base de datos

  saveModeloDb(item: TemplateFileStream): Promise<IModeloDB>; // 5.- Almacena el modelo en el catalog de la base de datos

  saveFacturaDb(inventario: IFacturaDb): Promise<IFacturaDb>;
}
