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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagenFromServer = exports.cargarMasivaCSV_refact = exports.cargarMasivaCSV = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
const csv_parse_1 = __importDefault(require("csv-parse"));
const fs_1 = __importDefault(require("fs"));
const request_1 = __importDefault(require("request"));
const conection_1 = require("../conection");
const ResponseGeneric_1 = require("../interfaces/ResponseGeneric");
const TemplateFileStrema_1 = require("../interfaces/TemplateFileStrema");
const _1114362_1 = require("./resources/facturas/1114362/1114362");
const service_acount_1 = require("./resources/service.acount");
const storageRef = service_acount_1.storage_Ref;
function cargarMasivaCSV(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const arrSalida = [];
        const arrNoEncontrado = [];
        yield cargaStreamOfFile().then((data) => __awaiter(this, void 0, void 0, function* () {
            _1114362_1.jsoModelos1114362.modelos.forEach((modeloTemplate, index) => __awaiter(this, void 0, void 0, function* () {
                let banEncontrado = false;
                data.filter((templateFile) => __awaiter(this, void 0, void 0, function* () {
                    if (templateFile.modelo === modeloTemplate.modelo) {
                        banEncontrado = true;
                        const fileName = "MOD2-" + new Date().getTime();
                        yield getImagenServer(templateFile);
                        templateFile.nombre = fileName;
                        templateFile.tallas = modeloTemplate.tallas.toString();
                        templateFile.id = 0;
                        const tempFile = Object.assign({}, templateFile);
                        arrSalida.push(tempFile);
                        yield saveDB(tempFile);
                    }
                }));
                if (!banEncontrado) {
                    arrNoEncontrado.push(modeloTemplate.modelo);
                }
            }));
            console.error("No encontrados!! ", arrNoEncontrado);
        }));
        return res.json(new ResponseGeneric_1.ResponseGeneric(arrSalida, 0, ""));
    });
}
exports.cargarMasivaCSV = cargarMasivaCSV;
function cargarMasivaCSV_refact(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const arrSalida = [];
        const arrNoEncontrado = [];
        yield cargaStreamOfFile().then((data) => __awaiter(this, void 0, void 0, function* () {
            _1114362_1.jsoModelos1114362.modelos.forEach((modeloTemplate, index) => __awaiter(this, void 0, void 0, function* () {
                let banEncontrado = false;
                data.forEach((templateFile) => __awaiter(this, void 0, void 0, function* () {
                    if (templateFile.modelo === modeloTemplate.modelo) {
                        banEncontrado = true;
                        templateFile.nombre = "MOD1-" + new Date().getTime();
                        templateFile.tallas = modeloTemplate.tallas;
                        templateFile.id = 0;
                        yield getImagenServer_refact(templateFile);
                        const tempFile = Object.assign({}, templateFile);
                        arrSalida.push(tempFile);
                        yield saveDB_refact(tempFile);
                    }
                }));
                if (!banEncontrado) {
                    arrNoEncontrado.push(modeloTemplate.modelo);
                }
            }));
        }));
        return res.json(new ResponseGeneric_1.ResponseGeneric(arrSalida, 0, ""));
        ;
    });
}
exports.cargarMasivaCSV_refact = cargarMasivaCSV_refact;
function cargaStreamOfFile() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const templateArrayStream = new Array();
            return fs_1.default.createReadStream("inventario.csv").pipe(csv_parse_1.default({}))
                .on('data', (data) => __awaiter(this, void 0, void 0, function* () {
                const descripcion = new String(data[1]).replace('"', ''); // descripcion
                /*
                data[0]: PLEASER_ITEM
                data[9]: IMAGE_FULL
                data[10]: IMAGE_THUMBAIL
                data[7]: WHOLESALE_PRICE_US
                data[14]: MSRP_USD_FOR_INTL_ACCT
                */
                const templateFileStream = new TemplateFileStrema_1.TemplateFileStream(data[0], descripcion, data[9], data[10], data[7], data[14], [], "");
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
function getImagenServer(objeto) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestSettings = {
            url: objeto.imageFull,
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
                    const file = yield storageRef.file('pleaser/uno/' + objeto.nombre);
                    file.save(imagebuffer, { metadata: metadata }, ((error) => {
                        if (error) {
                            console.log("Ha ocurrido un error");
                        }
                    }));
                }
            });
        });
    });
}
function getImagenServer_refact(objeto) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestSettings = {
            url: objeto.imageFull,
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
                    const file = yield storageRef.file('pruebas-refact/' + objeto.nombre);
                    file.save(imagebuffer, { metadata: metadata }, ((error) => {
                        if (error) {
                            console.log("Ha ocurrido un error");
                        }
                    }));
                }
            });
        });
    });
}
function saveDB(cat) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield conection_1.connection();
        const sql = 'INSERT INTO catalogotemp SET ? ';
        yield conn.query(sql, [cat]).then((data) => {
            console.log("Se inserto correctamente!!");
        }, (error) => {
            console.log("erro", error);
        });
        conn.end();
    });
}
function saveDB_refact(cat) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield conection_1.connection();
        const image = {
            idModelo: cat.modelo,
            imagenFull: cat.imageFull,
            imagenThumbnail: cat.imageThumbnail
        };
        const sql = 'INSERT INTO imagenpleaser SET ? ';
        yield conn.query(sql, image).then(() => {
            console.log("Todo ok");
        }, (error) => {
            console.log("erro", error);
        });
        try {
            for (var _b = __asyncValues(cat === null || cat === void 0 ? void 0 : cat.tallas), _c; _c = yield _b.next(), !_c.done;) {
                const talla = _c.value;
                const test = {
                    id: 0,
                    modelo: cat.modelo,
                    descripcion: cat.descripcion,
                    precioCompra: cat.precioCompra,
                    precioSugerido: cat.precioSugerido,
                    descuento: 0.0,
                    talla: talla,
                    estaDisponible: true,
                    nombre: cat.nombre
                };
                const sql2 = 'INSERT INTO existenciaspleaser SET ?';
                yield conn.query(sql2, test).then((data) => {
                    console.log("data", data);
                }, (error) => {
                    console.log("erro", error);
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
        conn.end();
    });
}
function getImagenFromServer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestSettings = {
            url: 'https://pleaser.sa.metacdn.com/picxnw/psp-bwbllyr.jpg',
            method: 'GET',
            encoding: null
        };
        request_1.default(requestSettings, function (error, response, body) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!error && response.statusCode == 200) {
                    const base64EncodedImageString = body;
                    const mimeType = 'image/jpeg';
                    const fileName = 'Tpsp-bwbllyr.jpg';
                    const metadata = {
                        contentType: mimeType
                    };
                    const imagebuffer = new Buffer(base64EncodedImageString);
                    const file = storageRef.file('pruebas/' + fileName);
                    file.save(imagebuffer, {
                        metadata: metadata
                    }, ((error) => {
                        if (error) {
                            return res.json({ 'error': error });
                        }
                    }));
                    file.getSignedUrl({
                        action: 'read',
                        expires: '03-01-2022'
                    }, (error, url) => {
                        if (error) {
                            return res.json(new ResponseGeneric_1.ResponseGeneric(error, -1, ""));
                        }
                        return res.json(new ResponseGeneric_1.ResponseGeneric(url, 0, ""));
                    });
                }
            });
        });
    });
}
exports.getImagenFromServer = getImagenFromServer;
