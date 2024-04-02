/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import csv from "csv-parse";
import {Request, Response } from "express";
import admin,{ ServiceAccount } from 'firebase-admin';
import fs from 'fs';
import request from 'request';

import { connection } from "../conection";
import { ExistenciasPleaser } from "../interfaces/ExistenciasPleaser";
import { ImagenPleaser } from "../interfaces/ImagenPleaser";
import { ResponseGeneric } from "../interfaces/ResponseGeneric";
import { TemplateFatura } from "../interfaces/TemplateFatura";
import { TemplateFileStream } from '../interfaces/TemplateFileStrema';
import {jsoModelos} from './resources/1114362'; 
import {jsonBitacoraModelos} from './resources/bitacora'; 



    const serviceAccount = {
        "type": "service_account",
        "project_id": "el-rey-33b3b",
        "private_key_id": "fde2e37b026e4e90e7a6b04907c18ca54cf27564",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5ir6xKBoTNEtQ\nIe4mqjRCVczHWW5Bcqa/JdicZujzcwog6tEt9z1kouRNibfuitqTG2XQvVpAHatC\nGGg7yx7eY+eZ4ZxabXV4+t8E9YrCskYH0E+Eg3F8Ggy0hyOFgNQyp7AK9OOUmF2A\nFnNvqpm+kCosbnOXufE5Z1/yC9vEyWga15sVcZ+2eDSiHUHWhcRudtXSK1dreRJ7\nLPaXjplKLz/r0XkKBUyxYL1/QzJ2j0NCf6gt8M0XkVWy8/ETu8JT7N2T3omJdEew\n1xBl7hVZntTxDHealutpoDH1j4/BpM0cUxvv1Fg83AMnm8LMzzvWTKL0iONGw/bU\n80K9P01ZAgMBAAECggEADJAh8FHkTheU3+SkQPb2WeWAW6EpD4JpWvj/jTuEm3NX\nJLpxlniurgE/jyZ7j0nUmfBZeQRRN5Uqsut/J0lOGkXOeUNm+FKACUSHVEkh76Pt\njPrkX3cc+Ie1A4ZA9/mspI9pIpzJShb1AcbDYzS8e0Q8rsx9xDDBbh8bRoLaCx1w\nUvuIwbFP4/XbGK6M1WUtw7AFa/xseIpr8DsX/LdhsjdkUYiPz5RU5P50elS7GSNx\n9MM+Yv2JSBAusmuv/0T27MJ5XMuAhNA3Ak3RiQGs26egAJ3JmjK0qNJnirXV110D\n2W684jQVxQk8l53jpZmfBlrk5sspLZMaf4guBFQi3wKBgQD2rVHfSCZE4FCqoTNv\nCVQiBU79VHfHq57X6PxJy4I9bcXXkpHr/bU4jTKJcNhtSv6J7CI7ZYxEtgc7Sjqj\nOmqFrlqxVZKwwDpRUAzTCVhVVzh1JF8MsY77tmK/h5/i+sdYPEr6v2wrg3aujoJf\nniPQ7uhspwZ0L0HByAQTbRIXFwKBgQDAjexv5cBCVNPp+Ayq2rFShINdYT2ASl9o\nXkRkdu8db0HFwNZ6NEFIXGiAODr6Xjb7Q+R/bpo6ANLzZ5OjHg6uHD7VFj0Amlb2\nQvlhvtGyqfY+jlr3PgxqYGwRiEABZZQ05lgDIss68BXxAST3yu/NUxqG6fYpeZ+R\nO0cwNPeFDwKBgCuyDfOoWycOORvQjETZ+S5BlHlpcgJLk0qZub70rrBk9ou2KeUM\nvwIyeMZB2AScKTSTQIkW9t7hA6zr/DEX0vC1LtmE2AQ5ONtYe70SRbRwS87sT233\nMeXCrAFTa+4QECnAHGQIbofStL48/jkj0SJcf41nlMwV5ucFoDs0seSnAoGAGQDU\n2Nrekj5tng4FpxHqwKpQXInJ8KS3qtfCzcDb39iYk9MshoXOjFTjhPLIRcaCITJ5\ns0prYGjG+7BRbXbztQwZ5JWUqkVgUW308ApVNHv5a7oUedJmzlFi9wvYM9Y63nui\nphWYijiuwLLDWCHT7beC1E4BFvWiELu/zLS0B2UCgYAy1rs810LZQxZ2jJCBZuqB\nZlTFI0LSC152TezkBMx8y+ifXSRu00uMmtyPqtiUE9fb77tfS9ZrwF4N6VNR5Su6\nYTxf5VlEkj0Rsl2XgoFTTSstFLDzvF/C7UZE+Z1T/9SR5vpkAuu/Z1lfqy3yx9xe\nYXeTn9Cp99st9JvF4XgAVw==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-6sihz@el-rey-33b3b.iam.gserviceaccount.com",
        "client_id": "116714503231343675305",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6sihz%40el-rey-33b3b.iam.gserviceaccount.com"
    } as ServiceAccount;

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://el-rey-33b3b-default-rtdb.firebaseio.com/',
        storageBucket:'gs://el-rey-33b3b.appspot.com/'
    });
    const storageRef = admin.storage().bucket('gs://el-rey-33b3b.appspot.com/'); 
    



    export async function cargarMasivaCSV(req: Request, res: Response): Promise <any> {
        const arrSalida: Array<TemplateFileStream>=[];
        const arrNoEncontrado: Array<string>=[];

        await cargaStreamOfFile().then(  async (data )=>{
            await jsoModelos.forEach( async ( modeloTemplate: TemplateFatura, index: number ) => {
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
                
        return res.json(new ResponseGeneric(arrSalida, 0, ""));;
        
    }

    export async function cargarMasivaCSV_refact(req: Request, res: Response): Promise <any> {
        const arrSalida: Array<TemplateFileStream>=[];
        const arrNoEncontrado: Array<string>=[];

        await cargaStreamOfFile().then(  async (data )=>{
            await jsoModelos.forEach( async ( modeloTemplate: TemplateFatura, index: number ) => {
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
                    const file = await storageRef.file('pleaser/uno/' + objeto.nombre); 
                    await file.save( imagebuffer, { metadata: metadata}, 
                        ((error: any, ) => {
                            if (error) {                                
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
                    const file = await storageRef.file('pruebas-refact/' + objeto.nombre); 
                    await file.save( imagebuffer, { metadata: metadata}, 
                        ((error: any, ) => {
                            if (error) {
                                
                                
                            }
                        } )
                    );
                }
            }
        );
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
