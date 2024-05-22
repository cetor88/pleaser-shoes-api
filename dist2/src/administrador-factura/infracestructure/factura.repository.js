"use strict";
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaResposiroryMsql = void 0;
const TemplateFileStream_1 = require("../domain/models/TemplateFileStream");
const fs_1 = __importDefault(require("fs"));
const service_acount_1 = require("../../../src/controllers/resources/service.acount");
const csv_parse_1 = __importDefault(require("csv-parse"));
const request_1 = __importDefault(require("request"));
const conection_1 = require("../../conection");
class FacturaResposiroryMsql {
    constructor() {
        this.urlCSV = 'inv_item.csv';
    }
    cargaCSV() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const templateArrayStream = new Array();
                return fs_1.default.createReadStream(this.urlCSV).pipe(csv_parse_1.default({}))
                    .on('data', (data) => __awaiter(this, void 0, void 0, function* () {
                    const descripcion = new String(data[1]).replace('"', ''); // descripcion
                    /* data[0]: PLEASER_ITEM, data[9]: IMAGE_FULL, data[10]: IMAGE_THUMBAIL
                    data[7]: WHOLESALE_PRICE_US, data[14]: MSRP_USD_FOR_INTL_ACCT */
                    const templateFileStream = new TemplateFileStream_1.TemplateFileStream(data[0], descripcion, data[9], data[10], data[7], data[14], [], "");
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
    saveImagenFb(modeloCSV) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestSettings = {
                url: modeloCSV.imageFull,
                method: 'GET',
                encoding: null
            };
            return request_1.default(requestSettings, function (error, response, body) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!error && response.statusCode == 200) {
                        const options = {
                            metadata: {
                                contentType: 'image/jpeg',
                            },
                            predefinedAcl: 'publicRead',
                            public: true
                        };
                        const bucket = service_acount_1.storage_Ref.file("pleaser-shoes/" + modeloCSV.modelo + ".jpeg");
                        yield bucket.save(body, options);
                        const metaData = yield bucket.getMetadata();
                        console.log(metaData[0].mediaLink);
                    }
                });
            });
        });
    }
    saveImagenDb(imagen) {
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
    saveModeloDb(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield conection_1.connection();
            const modelo = {
                idModelo: item.modelo,
                descripcion: item.descripcion
            };
            const sql = 'INSERT INTO modelo SET ? ';
            return new Promise(function (resolve, reject) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield conn.query(sql, modelo)
                        .then((row1) => {
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
    saveFacturaDb(factura) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Factura: ', factura);
            const conn = yield conection_1.connection();
            const sql2 = 'INSERT INTO factura SET ?';
            return new Promise(function (resolve, reject) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield conn.query(sql2, factura).then((data) => {
                        console.log('Factura insertada');
                        conn.end();
                        resolve(factura);
                    }, (error) => {
                        console.log("erro", error);
                        conn.end();
                        reject(error);
                    });
                });
            });
        });
    }
}
exports.FacturaResposiroryMsql = FacturaResposiroryMsql;
