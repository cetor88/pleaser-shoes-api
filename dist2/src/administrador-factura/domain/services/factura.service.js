"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaServices = void 0;
const zapatilla_repository_1 = require("../../../../src/administrador-zapatilla/infraestructure/zapatilla.repository");
const _1114362_1 = require("../../../controllers/resources/facturas/1114362/1114362");
const ResponseGeneric_1 = require("../../../interfaces/ResponseGeneric");
const factura_repository_1 = require("../../infracestructure/factura.repository");
class FacturaServices {
    constructor() {
        this.facturaResposiroryMsql = new factura_repository_1.FacturaResposiroryMsql();
        this.zapatillaResposiroryMsql = new zapatilla_repository_1.ZapatillaRepositoryMySql();
    }
    cargaFactura() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.facturaResposiroryMsql
                    .cargaCSV()
                    .then((modelosCsv) => __awaiter(this, void 0, void 0, function* () {
                    const jsonFactura = _1114362_1.jsoModelos1114362;
                    const facturaModel = {
                        idFactura: Number(jsonFactura.noFactura),
                        fechaCompra: _1114362_1.jsoModelos1114362.fechaFactura,
                    };
                    console.log(`******* ${facturaModel}`);
                    const factura = yield this.facturaResposiroryMsql.saveFacturaDb(facturaModel);
                    jsonFactura.modelos.forEach((modeloTemplate) => __awaiter(this, void 0, void 0, function* () {
                        let banEncontrado = false;
                        modelosCsv.forEach((csvRow) => __awaiter(this, void 0, void 0, function* () {
                            var e_1, _a;
                            if (csvRow.modelo === modeloTemplate.modelo) {
                                banEncontrado = true;
                                csvRow.nombre = "PSW-" + new Date().getTime();
                                csvRow.tallas = modeloTemplate.tallas;
                                csvRow.id = 0;
                                csvRow.modelo = csvRow.modelo.replace(new RegExp("/", "g"), "*");
                                yield this.facturaResposiroryMsql.saveImagenFb(csvRow);
                                const tempFile = Object.assign({}, csvRow);
                                //arrSalida.push(tempFile);
                                const imagen = yield this.facturaResposiroryMsql.saveImagenDb(tempFile);
                                const modelo = yield this.facturaResposiroryMsql.saveModeloDb(tempFile);
                                try {
                                    for (var _b = __asyncValues(tempFile === null || tempFile === void 0 ? void 0 : tempFile.tallas), _c; _c = yield _b.next(), !_c.done;) {
                                        const item = _c.value;
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
                                        yield this.zapatillaResposiroryMsql.saveZapatillaDb(zapatilla);
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                            }
                        }));
                        if (!banEncontrado) {
                            console.log("Modelo no encontrado: ", modeloTemplate.modelo);
                        }
                    }));
                }));
                return new ResponseGeneric_1.ResponseGeneric(null, 0, "Factura procesada");
            }
            catch (error) {
                return new ResponseGeneric_1.ResponseGeneric(null, -1, "Error al procesar la factura");
            }
        });
    }
}
exports.FacturaServices = FacturaServices;
