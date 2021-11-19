/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports*/
/* eslint-disable prettier/prettier */
import {Request, Response } from "express";
import { connection } from "../conection";
import { Modelo } from '../interfaces/Modelo';
import { ResponseGeneric } from '../interfaces/ResponseGeneric';


export async function getModelos( req: Request, res: Response ):Promise <Response> {
    const conn = await connection();
    return await conn.query('SELECT * FROM modelos')
    .then((response)=>{
        return res.json(new ResponseGeneric(response[0], 0, ""));
    }).catch((error)=>{
        return res.json(new ResponseGeneric(null, -1, error.message));
    });
}


export async function getModeloById( req: Request, res: Response ):Promise <Response> {
    const modeloId = req.params.modeloId;
    const conn = await connection();
    return await conn.query( 'SELECT * FROM modelos WHERE id=?', [modeloId])
    .then((response)=>{
        return res.json(new ResponseGeneric(response[0], 0, ""));
    }).catch((error)=>{
        return res.json(new ResponseGeneric(null, -1, error.message));
    });
}

export async function createModelo( req: Request, res: Response ):Promise<Response> {
    const modelo: Modelo= req.body;
    const conn = await connection();
    return await conn.query( 'INSERT INTO modelos SET ?', [modelo])
    .then((response)=>{
        return res.json(new ResponseGeneric(response[0], 0, ""));
    }).catch((error)=>{
        return res.json(new ResponseGeneric(null, -1, error.message));
    });
}

export async function deleteModeloById( req: Request, res: Response ):Promise <Response> {
    const modeloId = req.params.modeloId;
    console.log('modeloId', modeloId);
    const conn = await connection();
    return await conn.query( 'DELETE modelos WHERE id=?', [modeloId])
    .then((response)=>{
        return res.json(new ResponseGeneric(response[0], 0, ""));
    }).catch((error)=>{
        return res.json(new ResponseGeneric(null, -1, error.message));
    });

}

export async function getAllModelos( req: Request, res: Response ):Promise <Response> {
    const conn = await connection();
    return await conn.query('SELECT * FROM catalogotemp ')
    .then((response)=>{
        console.log(response)
        return res.json(new ResponseGeneric(response[0], 0, ""));
    }).catch((error)=>{
        return res.json(new ResponseGeneric(null, -1, error.message));
    });
}