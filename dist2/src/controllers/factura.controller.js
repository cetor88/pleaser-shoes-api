"use strict";
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargaFactura = void 0;
const ResponseGeneric_1 = require("../interfaces/ResponseGeneric");
const TemplateFileStrema_1 = require("../interfaces/TemplateFileStrema");
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = __importDefault(require("csv-parse"));
const request_1 = __importDefault(require("request"));
const conection_1 = require("../conection");
const _1114362_1 = require("./resources/facturas/1114362/1114362");
const service_acount_1 = require("./resources/service.acount");
const urlCSV = 'inv_item.csv';
const nombreCarpetraFb = 'pleaser-shoes/';
const storageRef = service_acount_1.storage_Ref;
function cargaFactura(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield cargaCSV().then((modelosCsv) => __awaiter(this, void 0, void 0, function* () {
            const jsonFactura = _1114362_1.jsoModelos1114362;
            const fechaFactura = new Date(jsonFactura.fechaFactura);
            // const fechaInventario = new Date();
            jsonFactura.modelos.forEach((modeloTemplate, index) => __awaiter(this, void 0, void 0, function* () {
                let banEncontrado = false;
                modelosCsv.forEach((csvRow) => __awaiter(this, void 0, void 0, function* () {
                    var e_1, _a;
                    if (csvRow.modelo === modeloTemplate.modelo) {
                        banEncontrado = true;
                        csvRow.nombre = "PSW-" + new Date().getTime();
                        csvRow.tallas = modeloTemplate.tallas;
                        csvRow.id = 0;
                        csvRow.modelo = csvRow.modelo.replace(new RegExp('/', 'g'), '*');
                        yield saveImagenFb(csvRow);
                        const tempFile = Object.assign({}, csvRow);
                        //arrSalida.push(tempFile);
                        const imagen = yield saveImagenDb(tempFile);
                        const modelo = yield saveModeloDb(tempFile);
                        try {
                            for (var _b = __asyncValues(tempFile === null || tempFile === void 0 ? void 0 : tempFile.tallas), _c; _c = yield _b.next(), !_c.done;) {
                                const item = _c.value;
                                const factura = {
                                    idZapatilla: 0,
                                    idModelo: modelo.idModelo,
                                    idImagen: imagen.idImagen,
                                    idTalla: Number(item),
                                    precioCompra: Number(tempFile.precioCompra),
                                    precioSugerido: Number(tempFile.precioSugerido),
                                    banVendido: false
                                    //noFactura: jsonFactura.noFactura,
                                    //fechaFactura: fechaFactura
                                };
                                yield saveFacturaDb(factura);
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
                    console.log('Modelo no encontrado: ', modeloTemplate.modelo);
                }
            }));
        }));
        return res.json(new ResponseGeneric_1.ResponseGeneric(null, 0, 'Factura Generada Correctamente'));
    });
}
exports.cargaFactura = cargaFactura;
function cargaCSV() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const templateArrayStream = new Array();
            return fs_1.default.createReadStream(urlCSV).pipe(csv_parse_1.default({}))
                .on('data', (data) => __awaiter(this, void 0, void 0, function* () {
                const descripcion = new String(data[1]).replace('"', ''); // descripcion
                /* data[0]: PLEASER_ITEM, data[9]: IMAGE_FULL, data[10]: IMAGE_THUMBAIL
                data[7]: WHOLESALE_PRICE_US, data[14]: MSRP_USD_FOR_INTL_ACCT */
                const templateFileStream = new TemplateFileStrema_1.TemplateFileStream1(data[0], descripcion, data[9], data[10], data[7], data[14], [], "");
                templateArrayStream.push(templateFileStream);
            }))
                .on('end', () => __awaiter(this, void 0, void 0, function* () {
                if (templateArrayStream) {
                    resolve(templateArrayStream);
                }
                else {
                    reject(Error("No data was found in the .csv"));
                }
            }));
        });
    });
}
function saveImagenFb(modeloCSV) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestSettings = {
            url: modeloCSV.imageFull,
            method: 'GET',
            encoding: null
        };
        return request_1.default(requestSettings, function (error, response, body) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!error && response.statusCode == 200) {
                    const base64EncodedImageString = body;
                    const mimeType = 'image/jpeg';
                    const metadata = {
                        contentType: mimeType
                    };
                    const imagebuffer = new Buffer(base64EncodedImageString);
                    const file = yield storageRef.file(nombreCarpetraFb + modeloCSV.modelo);
                    file.save(imagebuffer, { metadata: metadata }, ((error) => {
                        if (error) {
                            console.log('Ha ocurrido un errror: ', error);
                        }
                    }));
                }
            });
        });
    });
}
function saveImagenDb(imagen) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Imagen-> ', imagen === null || imagen === void 0 ? void 0 : imagen.modelo);
        console.log('Imagen-> ', imagen === null || imagen === void 0 ? void 0 : imagen.modelo.replace(/\*/g, '\/'));
        const image = {
            idImagen: 0,
            urlImagen: imagen.imageFull,
            urlThumbnail: imagen.imageThumbnail
        };
        const conn = yield conection_1.connection();
        const sql = 'INSERT INTO imagen SET ? ';
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield conn.query(sql, image).then((img) => {
                    console.log('Imagen insertada');
                    image.idImagen = img[0].insertId;
                    conn.end();
                    resolve(image);
                }, (error) => {
                    console.log("erro", error);
                    conn.end();
                    reject(error);
                });
            });
        });
    });
}
function saveModeloDb(item) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield conection_1.connection();
        const modelo = {
            idModelo: 0,
            modelo: item.modelo,
            descripcion: item.descripcion
        };
        const sql = 'INSERT INTO modelo SET ? ';
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield conn.query(sql, modelo)
                    .then((row1) => {
                    modelo.idModelo = row1[0].insertId;
                    console.log('Modelo insertada');
                    conn.end();
                    resolve(modelo);
                }, (error) => {
                    conn.end();
                    reject(error);
                });
            });
        });
    });
}
function saveFacturaDb(zapatilla) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield conection_1.connection();
        const sql2 = 'INSERT INTO zapatilla SET ?';
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield conn.query(sql2, zapatilla).then((data) => {
                    console.log('Factura insertada');
                    zapatilla.idZapatilla = data[0].insertId;
                    conn.end();
                    resolve(zapatilla);
                }, (error) => {
                    console.log("erro", error);
                    conn.end();
                    reject(error);
                });
            });
        });
    });
}
function saveInventarioDb(inventario) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield conection_1.connection();
        const sql2 = 'INSERT INTO inventario SET ?';
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield conn.query(sql2, inventario).then((data) => {
                    console.log('Inventario insertada');
                    inventario.idInventario = data[0].insertId;
                    conn.end();
                    resolve(inventario);
                }, (error) => {
                    console.log("erro", error);
                    conn.end();
                    reject(error);
                });
            });
        });
    });
}
