"use strict";
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable simple-import-sort/imports */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaResposiroryMsql = void 0;
const TemplateFileStream_1 = require("../domain/models/TemplateFileStream");
const fs_1 = __importDefault(require("fs"));
const csv_parse_1 = __importDefault(require("csv-parse"));
const request_1 = __importDefault(require("request"));
const conection_1 = require("../../conection");
const service_acount_1 = require("../fireBaseConfig/service.acount");
class FacturaResposiroryMsql {
    constructor() {
        this.urlCSV = 'inv_item.csv';
    }
    async cargaCSV() {
        return new Promise((resolve, reject) => {
            const templateArrayStream = new Array();
            return fs_1.default.createReadStream(this.urlCSV).pipe(csv_parse_1.default({}))
                .on('data', async (data) => {
                const descripcion = new String(data[1]).replace('"', ''); // descripcion
                /* data[0]: PLEASER_ITEM, data[9]: IMAGE_FULL, data[10]: IMAGE_THUMBAIL
                data[7]: WHOLESALE_PRICE_US, data[14]: MSRP_USD_FOR_INTL_ACCT */
                const templateFileStream = new TemplateFileStream_1.TemplateFileStream(data[0], descripcion, data[9], data[10], data[7], data[14], [], "");
                templateArrayStream.push(templateFileStream);
            })
                .on('end', async () => {
                if (templateArrayStream) {
                    resolve(templateArrayStream);
                }
                else {
                    reject(Error("No data was found in the .csv"));
                }
            });
        });
    }
    async saveImagenFb(modeloCSV) {
        const requestSettings = {
            url: modeloCSV.imageFull,
            method: 'GET',
            encoding: null
        };
        return request_1.default(requestSettings, async function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const options = {
                    metadata: {
                        contentType: 'image/jpeg',
                    },
                    predefinedAcl: 'publicRead',
                    public: true
                };
                const ref = service_acount_1.storage_Ref.file("pleaser-shoes/" + modeloCSV.modelo + ".jpeg");
                await ref.save(body, options);
                const metaData = await service_acount_1.storage_Ref.getMetadata();
                console.log(metaData[0].mediaLink);
            }
        });
    }
    async saveImagenDb(imagen) {
        console.log('Imagen-> ', imagen?.modelo);
        console.log('Imagen-> ', imagen?.modelo.replace(/\*/g, '\/'));
        const image = {
            idImagen: 0,
            urlImagen: imagen.imageFull,
            urlThumbnail: imagen.imageThumbnail
        };
        const conn = await conection_1.connection();
        const sql = 'INSERT INTO imagen SET ? ';
        return new Promise(async function (resolve, reject) {
            await conn.query(sql, image).then((img) => {
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
    }
    async saveModeloDb(item) {
        const conn = await conection_1.connection();
        const modelo = {
            idModelo: item.modelo,
            descripcion: item.descripcion
        };
        const sql = 'INSERT INTO modelo SET ? ';
        return new Promise(async function (resolve, reject) {
            await conn.query(sql, modelo)
                .then((row1) => {
                console.log('Modelo insertada');
                conn.end();
                resolve(modelo);
            }, (error) => {
                conn.end();
                reject(error);
            });
        });
    }
    async saveFacturaDb(factura) {
        console.log('Factura: ', factura);
        const conn = await conection_1.connection();
        const sql2 = 'INSERT INTO factura SET ?';
        return new Promise(async function (resolve, reject) {
            await conn.query(sql2, factura).then((data) => {
                console.log('Factura insertada');
                conn.end();
                resolve(factura);
            }, (error) => {
                console.log("erro", error);
                conn.end();
                reject(error);
            });
        });
    }
}
exports.FacturaResposiroryMsql = FacturaResposiroryMsql;
