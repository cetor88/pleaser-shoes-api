"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaServices = void 0;
const zapatilla_repository_1 = require("../../../../src/administrador-zapatilla/infraestructure/zapatilla.repository");
const ResponseGeneric_1 = require("../../../administrador/domain/models/ResponseGeneric");
const _1114362_1 = require("../../../controllers/resources/facturas/1114362/1114362");
const factura_repository_1 = require("../../infracestructure/factura.repository");
class FacturaServices {
    constructor() {
        this.facturaResposiroryMsql = new factura_repository_1.FacturaResposiroryMsql();
        this.zapatillaResposiroryMsql = new zapatilla_repository_1.ZapatillaRepositoryMySql();
    }
    async cargaFactura() {
        try {
            await this.facturaResposiroryMsql
                .cargaCSV()
                .then(async (modelosCsv) => {
                const jsonFactura = _1114362_1.jsoModelos1114362;
                const facturaModel = {
                    idFactura: Number(jsonFactura.noFactura),
                    fechaCompra: _1114362_1.jsoModelos1114362.fechaFactura,
                };
                const factura = await this.facturaResposiroryMsql.saveFacturaDb(facturaModel);
                jsonFactura.modelos.forEach(async (modeloTemplate) => {
                    let banEncontrado = false;
                    modelosCsv.forEach(async (csvRow) => {
                        if (csvRow.modelo === modeloTemplate.modelo) {
                            banEncontrado = true;
                            csvRow.nombre = "PSW-" + new Date().getTime();
                            csvRow.tallas = modeloTemplate.tallas;
                            csvRow.id = 0;
                            csvRow.modelo = csvRow.modelo.replace(new RegExp("/", "g"), "*");
                            await this.facturaResposiroryMsql.saveImagenFb(csvRow);
                            const tempFile = { ...csvRow };
                            //arrSalida.push(tempFile);
                            const imagen = await this.facturaResposiroryMsql.saveImagenDb(tempFile);
                            const modelo = await this.facturaResposiroryMsql.saveModeloDb(tempFile);
                            for await (const item of tempFile?.tallas) {
                                const zapatilla = {
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
                                await this.zapatillaResposiroryMsql.saveZapatillaDb(zapatilla);
                            }
                        }
                    });
                    if (!banEncontrado) {
                        console.log("Modelo no encontrado: ", modeloTemplate.modelo);
                    }
                });
            });
            return new ResponseGeneric_1.ResponseGeneric(null, 0, "Factura procesada");
        }
        catch (error) {
            return new ResponseGeneric_1.ResponseGeneric(null, -1, "Error al procesar la factura");
        }
    }
}
exports.FacturaServices = FacturaServices;
