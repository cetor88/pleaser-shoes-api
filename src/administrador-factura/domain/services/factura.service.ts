import IImagenDB from "src/administrador-modelo/domain/models/imagen.entity";
import IModeloDB from "src/administrador-modelo/domain/models/modelo.entity";
import IZapatillaDB from "src/administrador-zapatilla/domain/models/zapatilla.entity";

import { ZapatillaRepositoryMySql } from "../../../../src/administrador-zapatilla/infraestructure/zapatilla.repository";
import { jsoModelos1114362 } from "../../../controllers/resources/facturas/1114362/1114362";
import { ResponseGeneric } from "../../../interfaces/ResponseGeneric";
import { ModeloFactura } from "../../../interfaces/TemplateFatura";
import { FacturaResposiroryMsql } from "../../infracestructure/factura.repository";
import { IFacturaDb } from "../models/factura.repository";
import { TemplateFileStream } from "../models/TemplateFileStream";

export class FacturaServices {
  facturaResposiroryMsql: FacturaResposiroryMsql;
  zapatillaResposiroryMsql: ZapatillaRepositoryMySql;

  constructor() {
    this.facturaResposiroryMsql = new FacturaResposiroryMsql();
    this.zapatillaResposiroryMsql = new ZapatillaRepositoryMySql();
  }

  public async cargaFactura(): Promise<ResponseGeneric> {
    try {
      await this.facturaResposiroryMsql
        .cargaCSV()
        .then(async (modelosCsv: TemplateFileStream[]) => {
          const jsonFactura = jsoModelos1114362;
          const facturaModel: IFacturaDb = {
            idFactura: Number(jsonFactura.noFactura),
            fechaCompra: jsoModelos1114362.fechaFactura,
          };
          console.log(`******* ${facturaModel}`);
          const factura: IFacturaDb =
            await this.facturaResposiroryMsql.saveFacturaDb(facturaModel);

          jsonFactura.modelos.forEach(async (modeloTemplate: ModeloFactura) => {
            let banEncontrado = false;
            modelosCsv.forEach(async (csvRow: TemplateFileStream) => {
              if (csvRow.modelo === modeloTemplate.modelo) {
                banEncontrado = true;
                csvRow.nombre = "PSW-" + new Date().getTime();
                csvRow.tallas = modeloTemplate.tallas;
                csvRow.id = 0;
                csvRow.modelo = csvRow.modelo.replace(
                  new RegExp("/", "g"),
                  "*"
                );
                await this.facturaResposiroryMsql.saveImagenFb(csvRow);
                const tempFile: TemplateFileStream = { ...csvRow };
                //arrSalida.push(tempFile);
                const imagen: IImagenDB =
                  await this.facturaResposiroryMsql.saveImagenDb(tempFile);
                const modelo: IModeloDB =
                  await this.facturaResposiroryMsql.saveModeloDb(tempFile);
                for await (const item of tempFile?.tallas) {
                  const zapatilla: IZapatillaDB = {
                    idZapatilla: 0,
                    idModelo: modelo.idModelo,
                    idImagen: imagen.idImagen,
                    idTalla: Number(item),
                    idFactura: factura.idFactura,
                    precioCompra: Number(tempFile.precioCompra),
                    precioSugerido: Number(tempFile.precioSugerido),
                    precioVenta: Number(tempFile.precioSugerido) * 23,
                    disponibilidad: 1,
                    banVendido: false,
                  };
                  await this.zapatillaResposiroryMsql.saveZapatillaDb(
                    zapatilla
                  );
                }
              }
            });
            if (!banEncontrado) {
              console.log("Modelo no encontrado: ", modeloTemplate.modelo);
            }
          });
        });
      return new ResponseGeneric(null, 0, "Factura procesada");
    } catch (error) {
      return new ResponseGeneric(null, -1, "Error al procesar la factura");
    }
  }
}
