/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */

import {Request, Response } from "express";
import { ResponseGeneric } from "../interfaces/ResponseGeneric";
import { ModeloFactura } from "../interfaces/TemplateFatura";
import { TemplateFileStream1 } from "../interfaces/TemplateFileStrema";
import fs from 'fs';
import csv from "csv-parse";
import request from 'request';
import { connection } from "../conection";
import { Imagen, Modelo, Zapatilla, Inventario } from '../interfaces/pleaser-web/Imagen';
import { jsoModelos1114362 } from "./resources/facturas/1114362/1114362";
import { storage_Ref } from "./resources/service.acount";

const urlCSV: string = 'inv_item.csv';
const nombreCarpetraFb: string ='pleaser-shoes/';
const storageRef = storage_Ref;


export async function cargaFactura(req: Request, res: Response):  Promise <Response> {
    await cargaCSV().then(  async (  modelosCsv: TemplateFileStream1[] ) => {

        const jsonFactura = jsoModelos1114362;
        const fechaFactura = new Date(jsonFactura.fechaFactura);
        // const fechaInventario = new Date();


        jsonFactura.modelos.forEach( async (modeloTemplate: ModeloFactura, index: number ) =>{
            let banEncontrado = false;
            modelosCsv.forEach( async ( csvRow: TemplateFileStream1 )=>{
                    if ( csvRow.modelo === modeloTemplate.modelo){
                        banEncontrado=true;
                        csvRow.nombre = "PSW-"+ new Date().getTime();
                        csvRow.tallas = modeloTemplate.tallas;
                        csvRow.id = 0;
                        csvRow.modelo = csvRow.modelo.replace( new RegExp('/', 'g' ),'*');
                        await saveImagenFb(csvRow);
                        const tempFile: TemplateFileStream1 = {...csvRow};

                        //arrSalida.push(tempFile);
                        const imagen: Imagen   = await saveImagenDb(tempFile);
                        const modelo: Modelo   = await saveModeloDb(tempFile);
                        for await (const item of tempFile?.tallas) {
                            const factura: Zapatilla  = {
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
                            await saveFacturaDb(factura);
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
    return  res.json(new ResponseGeneric(null, 0, 'Factura Generada Correctamente'));
}



async function cargaCSV(): Promise<Array<TemplateFileStream1>> { // 1.- funcion que el recupera el array del csv

    return new Promise((resolve,reject)=>{
        const templateArrayStream  = new Array<TemplateFileStream1>();
        return  fs.createReadStream(urlCSV).pipe(csv({}))
        .on('data', async (data)=> {
            const descripcion = new String(data[1]).replace('"', ''); // descripcion
            /* data[0]: PLEASER_ITEM, data[9]: IMAGE_FULL, data[10]: IMAGE_THUMBAIL
            data[7]: WHOLESALE_PRICE_US, data[14]: MSRP_USD_FOR_INTL_ACCT */
            const templateFileStream = new TemplateFileStream1(data[0], descripcion, data[9], data[10], data[7], data[14], [], "");
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

async function saveImagenFb(modeloCSV: TemplateFileStream1): Promise<any> { // 3.- Carga en FB en el storage
    const requestSettings = {
        url: modeloCSV.imageFull,
        method: 'GET',
        encoding: null
    };
    return request(
        requestSettings,
        async  function (error, response, body): Promise<void> {
            if (!error && response.statusCode == 200) {
                const base64EncodedImageString = body;
                const mimeType = 'image/jpeg';

                const metadata = {
                    contentType: mimeType
                };
                const imagebuffer: Buffer = new Buffer(base64EncodedImageString);
                const file = await storageRef.file( nombreCarpetraFb + modeloCSV.modelo);

                file.save( imagebuffer, { metadata: metadata},
                    ((error: any, ) => {
                        if (error) {
                            console.log('Ha ocurrido un errror: ', error);
                        }
                    } )
                );
            }
        }
    );
}

async function saveImagenDb(imagen: TemplateFileStream1): Promise<Imagen>{ // 4.- Almacena la imagen en el catalogo de base de datos
    console.log('Imagen-> ', imagen?.modelo );
    console.log('Imagen-> ', imagen?.modelo.replace( /\*/g, '\/') );
    const image: Imagen  = {
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

async function saveModeloDb(item: TemplateFileStream1): Promise<Modelo>{ // 5.- Almacena el modelo en el catalog de la base de datos
    const conn = await connection();
    const modelo: Modelo  = {
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

async function saveFacturaDb(zapatilla: Zapatilla): Promise< Zapatilla >{ // 6.- Almacena la zapatilla en el catalogo de la base de datos
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

async function saveInventarioDb(inventario: Inventario): Promise< Inventario >{
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