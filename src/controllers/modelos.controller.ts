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
    let page = Number(req.params.page);
    const size = Number(req.params.size);
    if(page && size){
        page = (page -1) * size;

        const conn = await connection();
        return await conn.query(`SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, 
        ( inv.precioVenta - (inv.precioVenta * .05) ) as precioVenta, inv.estaVendida FROM inventario inv 
        LEFT JOIN (imagen im, modelo mo )
            ON ( im.idImagen = inv.idImagen AND
                    mo.idModelo = inv.idModelo	)
        ORDER BY inv.precioVenta ASC
        LIMIT ${page}, ${size}` )
        .then((response)=>{
            console.log(response)
            return res.json(new ResponseGeneric(response[0], 0, ""));
        }).catch((error)=>{
            return res.json(new ResponseGeneric(null, -1, error.message));
        });
    }
    return res.json(new ResponseGeneric(null, -1, "No se encontro el modelo solicitado"))
}


export async function getModeloById( req: Request, res: Response ):Promise <Response> { // Buffer.from('Hello World!').toString('base64')
    const modeloId = req.params.modeloId;
    console.log('modelo: ', Buffer.from(modeloId, 'base64').toString());
    if(modeloId){
        const modelo = Buffer.from(modeloId, 'base64').toString()
        
        const conn = await connection();
        return await conn.query( `SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, 
                                        im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, inv.precioVenta, 
                                        inv.estaVendida FROM inventario inv 
                                LEFT JOIN (imagen im, modelo mo )
                                ON ( im.idImagen = inv.idImagen AND
                                    mo.idModelo = inv.idModelo	)
                                WHERE inv.idImagen  LIKE '%${modelo}%'`)
        .then((response)=>{
            return res.json(new ResponseGeneric(response[0], 0, ""));
        }).catch((error)=>{
            return res.json(new ResponseGeneric(null, -1, error.message));
        });
    }
    return res.json(new ResponseGeneric(null, -1, "No se encontro el modelo solicitado"))
}

export async function getModeloByTalla( req: Request, res: Response ):Promise <Response> { // Buffer.from('Hello World!').toString('base64')
    const talla = Number(req.params.talla);
    console.log("getModeloByTalla,", talla);
    if(talla){
        
        const conn = await connection();
        return await conn.query( `SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, inv.precioVenta,		inv.estaVendida FROM inventario inv 
        LEFT JOIN (imagen im, modelo mo )
            ON ( im.idImagen = inv.idImagen AND
                     mo.idModelo = inv.idModelo	)
        WHERE inv.talla=?`, [ talla ] )
        .then((response)=>{
            return res.json(new ResponseGeneric(response[0], 0, ""));
        }).catch((error)=>{
            return res.json(new ResponseGeneric(null, -1, error.message));
        });
    }
    return res.json(new ResponseGeneric(null, -1, "No se encontro el modelo solicitado"))
}


export async function getModeloByTallaOrden( req: Request, res: Response ):Promise <Response> { // Buffer.from('Hello World!').toString('base64')
    const talla = Number(req.params.talla);
    const orden: string = req.params.orden;
    console.log("getModeloByPrecioTalla");
    
    if(talla && orden){
        const conn = await connection();
        return await conn.query( `SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, inv.precioVenta,		inv.estaVendida FROM inventario inv 
		LEFT JOIN (imagen im, modelo mo )
			ON ( im.idImagen = inv.idImagen AND
					 mo.idModelo = inv.idModelo	)
		WHERE inv.talla=${talla} 
		ORDER BY inv.precioVenta ${orden}` )
        .then((response)=>{
            return res.json(new ResponseGeneric(response[0], 0, ""));
        }).catch((error)=>{
            return res.json(new ResponseGeneric(null, -1, error.message));
        });
    }
    return res.json(new ResponseGeneric(null, -1, "No se encontro el modelo solicitado"))
}


export async function getModeloByPrecios( req: Request, res: Response ):Promise <Response> { // Buffer.from('Hello World!').toString('base64')
    const talla = Number(req.params.talla);
    const minimo = Number(req.params.minimo);
    const maximo = Number(req.params.maximo);
    console.log("getModeloByPrecios");
    
    if(talla&& minimo && maximo){
        const conn = await connection();
        return await conn.query( `SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, inv.precioVenta,		inv.estaVendida FROM inventario inv 
		LEFT JOIN (imagen im, modelo mo )
			ON ( im.idImagen = inv.idImagen AND
					 mo.idModelo = inv.idModelo	)
		WHERE inv.talla= ${talla} AND
		inv.precioVenta BETWEEN ${minimo} AND ${maximo} 
        ORDER BY inv.precioVenta ASC ` )
        .then((response)=>{
            return res.json(new ResponseGeneric(response[0], 0, ""));
        }).catch((error)=>{
            return res.json(new ResponseGeneric(null, -1, error.message));
        });
    }
    return res.json(new ResponseGeneric(null, -1, "No se encontro el modelo solicitado"))
}