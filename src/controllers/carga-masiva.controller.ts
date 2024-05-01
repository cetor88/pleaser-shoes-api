/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import csv from "csv-parse";
import {Request, Response } from "express";
import fs from 'fs';
import request from 'request';

import { connection } from "../conection";
import { ExistenciasPleaser } from "../interfaces/ExistenciasPleaser";
import { ImagenPleaser } from "../interfaces/ImagenPleaser";
import { ResponseGeneric } from "../interfaces/ResponseGeneric";
import { ModeloFactura } from "../interfaces/TemplateFatura";
import { TemplateFileStream } from '../interfaces/TemplateFileStrema';
import {jsoModelos1114362} from './resources/facturas/1114362/1114362';
import { storage_Ref } from "./resources/service.acount";


    const storageRef = storage_Ref;


    export async function cargarMasivaCSV(req: Request, res: Response): Promise <any> {
        const arrSalida: Array<TemplateFileStream>=[];
        const arrNoEncontrado: Array<string>=[];

        await cargaStreamOfFile().then(  async (data )=>{
            jsoModelos1114362.modelos.forEach( async ( modeloTemplate: ModeloFactura, index: number ) => {
                let banEncontrado=false;
                data.filter( async ( templateFile: TemplateFileStream )=>{
                    if ( templateFile.modelo === modeloTemplate.modelo){
                        banEncontrado=true;
                        const fileName = "MOD2-" + new Date().getTime();
                        await getImagenServer(templateFile);
                        templateFile.nombre = fileName;
                        templateFile.tallas = modeloTemplate.tallas.toString();
                        templateFile.id = 0;
                        const tempFile: TemplateFileStream = {...templateFile};
                        arrSalida.push(tempFile);
                        await saveDB(tempFile);
                    }
                });
                if(!banEncontrado){
                    arrNoEncontrado.push(modeloTemplate.modelo);
                }
            });
            console.error("No encontrados!! ",arrNoEncontrado);
        });
        return res.json(new ResponseGeneric(arrSalida, 0, ""));
    }

    export async function cargarMasivaCSV_refact(req: Request, res: Response): Promise <any> {
        const arrSalida: Array<TemplateFileStream>=[];
        const arrNoEncontrado: Array<string>=[];

        await cargaStreamOfFile().then(  async (data )=>{
            jsoModelos1114362.modelos.forEach( async ( modeloTemplate: ModeloFactura, index: number ) => {
                let banEncontrado=false;
                data.forEach( async ( templateFile: TemplateFileStream )=>{
                    if ( templateFile.modelo === modeloTemplate.modelo){
                        banEncontrado=true;

                        templateFile.nombre = "MOD1-"+ new Date().getTime();
                        templateFile.tallas = modeloTemplate.tallas;
                        templateFile.id = 0;
                        await getImagenServer_refact(templateFile);
                        const tempFile: TemplateFileStream = {...templateFile};
                        arrSalida.push(tempFile);
                        await saveDB_refact(tempFile);
                    }
                });
                if(!banEncontrado){
                    arrNoEncontrado.push(modeloTemplate.modelo);
                }
            });
        });
        return res.json(new ResponseGeneric(arrSalida, 0, ""));;
    }

    async function cargaStreamOfFile(): Promise<Array<TemplateFileStream>> { // funcion que el recupera el array
        return new Promise((resolve,reject)=>{
            const templateArrayStream  = new Array<TemplateFileStream>();
            return  fs.createReadStream("inventario.csv").pipe(csv({}))
            .on('data', async (data)=> {
                const descripcion = new String(data[1]).replace('"', ''); // descripcion
                /*
                data[0]: PLEASER_ITEM
                data[9]: IMAGE_FULL
                data[10]: IMAGE_THUMBAIL
                data[7]: WHOLESALE_PRICE_US
                data[14]: MSRP_USD_FOR_INTL_ACCT
                */
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

    async function getImagenServer(objeto: TemplateFileStream): Promise<any>   {
        const requestSettings = {
            url: objeto.imageFull,
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
                    const file = await storageRef.file('pleaser/uno/' + objeto.nombre);
                    file.save( imagebuffer, { metadata: metadata},
                        ((error: any, ) => {
                            if (error) {
                                console.log("Ha ocurrido un error")
                            }
                        } )
                    );
                }
            }
        );
    }

    async function getImagenServer_refact(objeto: TemplateFileStream): Promise<any>   {
        const requestSettings = {
            url: objeto.imageFull,
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
                    const file = await storageRef.file('pruebas-refact/' + objeto.nombre); 
                    file.save( imagebuffer, { metadata: metadata}, 
                        ((error: any, ) => {
                            if (error) {
                            console.log("Ha ocurrido un error");
                            }
                        } )
                    );
                }
            }
        )
    }


    async function saveDB(cat: TemplateFileStream):Promise<void> {
        const conn = await connection();
        const sql = 'INSERT INTO catalogotemp SET ? ';
        await conn.query(sql, [cat]).then((data)=>{
            console.log("Se inserto correctamente!!")
        },
        (error)=>{
            console.log("erro", error);
        });

        conn.end();
    }

    async function saveDB_refact(cat: TemplateFileStream):Promise<void> {
        const conn = await connection();
        const image: ImagenPleaser  = {
            idModelo: cat.modelo,
            imagenFull: cat.imageFull,
            imagenThumbnail: cat.imageThumbnail
        };
        const sql = 'INSERT INTO imagenpleaser SET ? ';

        await conn.query(sql, image).then(()=>{
            console.log("Todo ok");

        },(error)=>{
            console.log("erro", error);
        });

        for await (const talla of cat?.tallas) {
            const test: ExistenciasPleaser = {
                id:0,
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

            await conn.query(sql2, test ).then((data) => {
                console.log("data", data);
            }, (error) => {
                console.log("erro", error);
            });
        };

        conn.end();
    }

    export async function getImagenFromServer(req: Request, res: Response): Promise<any>  {
        const requestSettings = {
            url: 'https://pleaser.sa.metacdn.com/picxnw/psp-bwbllyr.jpg',
            method: 'GET',
            encoding: null
        };
        request(
            requestSettings,
            async  function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    const base64EncodedImageString = body;
                    const mimeType = 'image/jpeg';
                    const fileName = 'Tpsp-bwbllyr.jpg';
                    const metadata = {
                        contentType: mimeType
                    };
                    const imagebuffer: Buffer = new Buffer(base64EncodedImageString);
                    const file = storageRef.file('pruebas/' + fileName);
                    file.save(imagebuffer, {
                        metadata: metadata}, 
                        ((error: any, ) => {
                            if (error) {
                                return res.json({'error':error});
                            }
                        } )
                    );
                    file.getSignedUrl(
                        {
                            action:'read',
                            expires: '03-01-2022'
                        }, (error, url)=>{
                            if (error){
                                return res.json(new ResponseGeneric(error, -1, ""));
                            }                        return res.json(new ResponseGeneric(url, 0, ""));
                        }
                    );
                }
            }
        );
    }
