/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable simple-import-sort/imports */

import IImagenDB from "src/administrador-modelo/domain/models/imagen.entity";
import { IInventarioDB } from "src/administrador-modelo/domain/models/inventario.entity";
import IModeloDB from "src/administrador-modelo/domain/models/modelo.entity";
import IZapatillaDB from "src/administrador-modelo/domain/models/zapatilla.entity";
import { TemplateFileStream } from "../domain/models/TemplateFileStream";
import { IFacturaRepository } from "../domain/repositories/FacturaInterface";
import fs from 'fs';
 import { storage1, storage_Ref, storage_Ref1 } from "../../../src/controllers/resources/service.acount";
import csv from "csv-parse";
import request from "request";
import { connection } from "../../conection";
import { ResponseGeneric } from "../../../src/interfaces/ResponseGeneric";
import { jsoModelos1114362 } from "../../../src/controllers/resources/facturas/1114362/1114362";
import { ModeloFactura } from "../../../src/interfaces/TemplateFatura";

import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, uploadString } from "firebase/storage";
import { GetSignedUrlConfig, SaveOptions, UploadOptions } from "@google-cloud/storage";

export class FacturaResposiroryMsql implements IFacturaRepository {

    urlCSV: string = 'inv_item.csv';

    async cargaFactura(): Promise<ResponseGeneric> {
        await this.cargaCSV().then(  async (  modelosCsv: TemplateFileStream[] ) => {

            const jsonFactura = jsoModelos1114362;
            const fechaFactura = new Date(jsonFactura.fechaFactura);
            // const fechaInventario = new Date();
            jsonFactura.modelos.forEach( async (modeloTemplate: ModeloFactura) =>{
                let banEncontrado = false;
                modelosCsv.forEach( async ( csvRow: TemplateFileStream )=>{
                        if ( csvRow.modelo === modeloTemplate.modelo){
                            banEncontrado=true;
                            csvRow.nombre = "PSW-"+ new Date().getTime();
                            csvRow.tallas = modeloTemplate.tallas;
                            csvRow.id = 0;
                            csvRow.modelo = csvRow.modelo.replace( new RegExp('/', 'g' ),'_');
                            await this.saveImagenFb(csvRow);
                            const tempFile: TemplateFileStream = {...csvRow};
                            //arrSalida.push(tempFile);
                            const imagen: IImagenDB   = await this.saveImagenDb(tempFile);
                            const modelo: IModeloDB   = await this.saveModeloDb(tempFile);
                            for await (const item of tempFile?.tallas) {
                                const zapatilla: IZapatillaDB  = {
                                    idZapatilla: 0,
                                    idModelo: modelo.idModelo,
                                    idImagen: imagen.idImagen,
                                    idTalla: Number(item),
                                    precioCompra: Number(tempFile.precioCompra),
                                    precioSugerido: Number(tempFile.precioSugerido),
                                    banVendido: false
                                };
                                await this.saveFacturaDb(zapatilla);
                                //const itemFactura: Factura = await saveFacturaDb(factura);
                                /*const inventario: Inventario = {
                                    idInventario: 0,
                                    idModelo: modelo.idModelo,
                                    idImagen: imagen.idImagen,
                                    idFactura: itemFactura.idFactura,
                                    talla: Number(item),
                                    precioCompra: Number(tempFile.precioCompra),
                                    precioSugerido: Number(tempFile.precioSugerido),
                                    precioVenta: Number(tempFile.precioSugerido) * 23,
                                    ajustePrecio: 100,
                                    estaVendida: 0,
                                    fechaInventario: fechaInventario
                                }
                                await saveInventarioDb(inventario);*/
                            }
                        }
                    });
                    if(!banEncontrado){
                        console.log('Modelo no encontrado: ', modeloTemplate.modelo);
                    }
            });
        });
        return new ResponseGeneric(null, 0, "Factura procesada");
    }


    async cargaCSV(): Promise<TemplateFileStream[]> {
        return new Promise((resolve,reject)=>{
            const templateArrayStream  = new Array<TemplateFileStream>();
            return  fs.createReadStream(this.urlCSV).pipe(csv({}))
            .on('data', async (data: any)=> {
                const descripcion = new String(data[1]).replace('"', ''); // descripcion
                /* data[0]: PLEASER_ITEM, data[9]: IMAGE_FULL, data[10]: IMAGE_THUMBAIL
                data[7]: WHOLESALE_PRICE_US, data[14]: MSRP_USD_FOR_INTL_ACCT */
                const templateFileStream = new TemplateFileStream(data[0], descripcion, data[9], data[10], data[7], data[14], [], "");
                templateArrayStream.push(templateFileStream);
            })
            .on ('end',  async() =>{
                if(templateArrayStream){
                    resolve(templateArrayStream);
                }else{
                    reject(Error("No data was found in the .csv"));
                }
            } );
        });
    }

    async saveImagenFb(modeloCSV: TemplateFileStream): Promise<any> {
        const requestSettings = {
            url: modeloCSV.imageThumbnail,
            method: 'GET',
            encoding: null
        };
        return request(
            requestSettings,
            async  function (error, response, body): Promise<void> {
                if (!error && response.statusCode == 200) {
//                    const imagebuffer: Buffer = new Buffer(body);
                    const options: SaveOptions = {
                        metadata: {
                            contentType: 'image/jpeg',
                        },
                        predefinedAcl: 'publicRead',
                        public: true
                    };
                    const bucket = storage_Ref.file("pleaser-shoes/" + modeloCSV.modelo + ".jpeg");
                    await bucket.save(body, options);
                    const metaData = await bucket.getMetadata();
                    console.log(metaData[0].mediaLink);
                }
            }
        );
    }

    async saveImagenDb(imagen: TemplateFileStream): Promise<IImagenDB> {
        console.log('Imagen-> ', imagen?.modelo );
        console.log('Imagen-> ', imagen?.modelo.replace( /\*/g, '\/') );
        const image: IImagenDB  = {
            idImagen: 0,
            urlImagen: imagen.imageFull,
            urlThumbnail: imagen.imageThumbnail
        };
    
        const conn = await connection();
        const sql = 'INSERT INTO imagen SET ? ';
        return new Promise( async function(resolve, reject)  {
            await conn.query(sql, image).then((img: any)=>{
                console.log('Imagen insertada');
                image.idImagen = img[0].insertId;
                conn.end();
                resolve(image);
            },(error)=>{
                console.log("erro", error);
                conn.end();
                reject(error);
            });
    
            
        });
    }

    async saveModeloDb(item: TemplateFileStream): Promise<IModeloDB> {
        const conn = await connection();
        const modelo: IModeloDB  = {
            idModelo: 0,
            modelo: item.modelo,
            descripcion: item.descripcion
        };
        const sql = 'INSERT INTO modelo SET ? ';
        return new Promise( async function(resolve, reject)  {
            await conn.query(sql, modelo)
            .then((row1: any)=>{
                modelo.idModelo = row1[0].insertId;
                console.log('Modelo insertada');
                conn.end();
                resolve (modelo);
            },(error)=>{
                conn.end();
                reject(error);
            })
        });
    }

    async saveFacturaDb(zapatilla: IZapatillaDB): Promise<IZapatillaDB> {
        const conn = await connection();
        const sql2 = 'INSERT INTO zapatilla SET ?';
        return new Promise( async function(resolve, reject) {
            await conn.query(sql2, zapatilla ).then((data: any) => {
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
    }

    async saveInventarioDb(inventario: IInventarioDB): Promise<IInventarioDB> {
        const conn = await connection();
        const sql2 = 'INSERT INTO inventario SET ?';
        return new Promise( async function(resolve, reject) {
            await conn.query(sql2, inventario ).then((data: any) => {
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
    }

}