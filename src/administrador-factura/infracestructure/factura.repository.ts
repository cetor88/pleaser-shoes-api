/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable simple-import-sort/imports */

import IImagenDB from "src/administrador-modelo/domain/models/imagen.entity";
import IModeloDB from "src/administrador-modelo/domain/models/modelo.entity";
import { TemplateFileStream } from "../domain/models/TemplateFileStream";
import { IFacturaRepository } from "../domain/repositories/FacturaInterface";
import fs from 'fs';
import csv from "csv-parse";
import request from "request";
import { connection } from "../../conection";
import { SaveOptions } from "@google-cloud/storage";
import { IFacturaDb } from "../domain/models/factura.repository";
import { storage_Ref } from "../fireBaseConfig/service.acount";

export class FacturaResposiroryMsql implements IFacturaRepository {

    urlCSV: string = 'inv_item.csv';

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
            url: modeloCSV.imageFull,
            method: 'GET',
            encoding: null
        };
        return request(
            requestSettings,
            async  function (error, response, body): Promise<void> {
                if (!error && response.statusCode == 200) {
                    const options: SaveOptions = {
                        metadata: {
                            contentType: 'image/jpeg',
                        },
                        predefinedAcl: 'publicRead',
                        public: true
                    };
                    const ref = storage_Ref.file("pleaser-shoes/" + modeloCSV.modelo + ".jpeg");
                    await ref.save(body, options);
                    const metaData = await ref.getMetadata();
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
            idModelo: item.modelo,
            descripcion: item.descripcion
        };
        const sql = 'INSERT INTO modelo SET ? ';
        return new Promise( async function(resolve, reject)  {
            await conn.query(sql, modelo)
            .then((row1: any)=>{
                console.log('Modelo insertada');
                conn.end();
                resolve (modelo);
            },(error)=>{
                conn.end();
                reject(error);
            })
        });
    }

    async saveFacturaDb(factura: IFacturaDb): Promise<IFacturaDb> {
        console.log('Factura: ', factura);
        const conn = await connection();
        const sql2 = 'INSERT INTO factura SET ?';
        return new Promise( async function(resolve, reject) {

            await conn.query(sql2, factura ).then((data) => {
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