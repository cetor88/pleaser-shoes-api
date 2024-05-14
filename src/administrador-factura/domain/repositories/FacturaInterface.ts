import IImagenDB from "src/administrador-modelo/domain/models/imagen.entity";
import { IInventarioDB } from "src/administrador-modelo/domain/models/inventario.entity";
import IModeloDB from "src/administrador-modelo/domain/models/modelo.entity";
import IZapatillaDB from "src/administrador-modelo/domain/models/zapatilla.entity";
import { ResponseGeneric } from "src/interfaces/ResponseGeneric";

import { TemplateFileStream } from "../models/TemplateFileStream";

export interface IFacturaRepository {
  cargaFactura(): Promise<ResponseGeneric>;

  cargaCSV(): Promise<Array<TemplateFileStream>>; // 1.- funcion que el recupera el array del csv

  saveImagenFb(modeloCSV: TemplateFileStream): Promise<any>; // 3.- Carga en FB en el storage

  saveImagenDb(imagen: TemplateFileStream): Promise<IImagenDB>; // 4.- Almacena la imagen en el catalogo de base de datos

  saveModeloDb(item: TemplateFileStream): Promise<IModeloDB>; // 5.- Almacena el modelo en el catalog de la base de datos

  saveFacturaDb(zapatilla: IZapatillaDB): Promise<IZapatillaDB>; // 6.- Almacena la zapatilla en el catalogo de la base de datos

  saveInventarioDb(inventario: IInventarioDB): Promise<IInventarioDB>;
}
