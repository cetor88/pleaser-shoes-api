/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */

import {Request, Response } from "express";
import { ResponseGeneric } from "../../interfaces/ResponseGeneric";
import { ModeloFactura } from "../../interfaces/TemplateFatura";
import { TemplateFileStream } from "../../interfaces/TemplateFileStrema";
import fs from 'fs';
import csv from "csv-parse";
import { storageRef } from "./service.account";
import request from 'request';
import { connection } from "../../conection";
import { Imagen, Modelo, Factura, Inventario } from '../../interfaces/pleaser-web/Imagen';
import { jsonBitacoraModelos } from "../resources/facturas/bitacora/bitacora";
import { jsoModelos1114362 } from "../resources/facturas/1114362/1114362";
import { jsoModelos1127926 } from "../resources/facturas/1127926/1127926";
import { jsonModelos1123973 } from "../resources/facturas/1123973/1123973";

const urlCSV: string = 'inv_item.csv';
const nombreCarpetraFb: string ='pleaser-shoes/';



export async function cargaFactura(req: Request, res: Response):  Promise <Response> {
    await cargaCSV().then(  async (  arrCSV: TemplateFileStream[] ) => {
        
        const jsonFactura = jsoModelos1114362;
        const fechaFactura = new Date(jsonFactura.fechaFactura);
        const fechaInventario = new Date();

        await jsonFactura.modelos.forEach( async (modeloTemplate: ModeloFactura, index: number ) =>{
            let banEncontrado=false;
            arrCSV.forEach( async ( templateFile: TemplateFileStream )=>{
                    if ( templateFile.modelo === modeloTemplate.modelo){
                        banEncontrado=true;
                        templateFile.nombre = "PSW-"+ new Date().getTime();
                        templateFile.tallas = modeloTemplate.tallas;
                        templateFile.id = 0;
                        templateFile.modelo = templateFile.modelo.replace( new RegExp('/', 'g' ),'*');
                        await saveImagenFb(templateFile);
                        const tempFile: TemplateFileStream = {...templateFile};
                        
                        //arrSalida.push(tempFile);
                        const imagen: Imagen   = await saveImagenDb(tempFile);
                        const modelo: Modelo   = await saveModeloDb(tempFile);
                        for await (const item of tempFile?.tallas) {
                            const factura: Factura  = {
                                idFactura: 0,
                                noFactura: jsonFactura.noFactura,
                                idModelo: modelo.idModelo,
                                talla: item.toString(),
                                precioCompra: Number(tempFile.precioCompra),
                                fechaFactura: fechaFactura

                            };
                            const itemFactura: Factura = await saveFacturaDb(factura);

                            const inventario: Inventario = {
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
                            await saveInventarioDb(inventario);
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



async function cargaCSV(): Promise<Array<TemplateFileStream>> { // funcion que el recupera el array
        
    return new Promise((resolve,reject)=>{
        const templateArrayStream  = new Array<TemplateFileStream>();
        return  fs.createReadStream(urlCSV).pipe(csv({}))
        .on('data', async (data)=> {
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

async function saveImagenFb(modeloCSV: TemplateFileStream): Promise<any>   {
    const requestSettings = {
        url: modeloCSV.imageFull,
        method: 'GET',
        encoding: null
    };
    return await request(
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
                await file.save( imagebuffer, { metadata: metadata}, 
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

async function saveImagenDb(imagen: TemplateFileStream): Promise<Imagen>{
    console.log('Imagen-> ', imagen?.modelo );
    console.log('Imagen-> ', imagen?.modelo.replace( /\*/g, '\/') );
    const image: Imagen  = {
        idImagen: imagen?.modelo.replace( /\*/g, '\/') ||'',
        urlImagen: imagen.imageFull,
        urlImagenThumbnail: imagen.imageThumbnail
    };

    const conn = await connection();
    const sql = 'INSERT INTO imagen SET ? ';
    return new Promise( async function(resolve, reject)  {
        await conn.query(sql, image).then(()=>{
            console.log('Imagen insertada');
            conn.end();
            resolve(image);
        },(error)=>{
            console.log("erro", error);
            conn.end();
            reject(error);
        });

        
    });
}

async function saveModeloDb(item: TemplateFileStream): Promise<Modelo>{
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

async function saveFacturaDb(factura: Factura): Promise< Factura >{
    const conn = await connection();
    const sql2 = 'INSERT INTO factura SET ?';
    return new Promise( async function(resolve, reject) {
        await conn.query(sql2, factura ).then((data: any) => {
            console.log('Factura insertada');
            factura.idFactura = data[0].insertId;
            conn.end();
            resolve(factura);
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