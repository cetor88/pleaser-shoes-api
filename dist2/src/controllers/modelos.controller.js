"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModeloByPrecios = exports.getModeloByTallaOrden = exports.getModeloByTalla = exports.getModeloById = exports.getAllModelos = exports.deleteModeloById = exports.createModelo = exports.getModelos = void 0;
const conection_1 = require("../conection");
const ResponseGeneric_1 = require("../administrador/domain/models/ResponseGeneric");
function getModelos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield conection_1.connection();
        return yield conn.query('SELECT * FROM modelos')
            .then((response) => {
            return res.json(new ResponseGeneric_1.ResponseGeneric(response[0], 0, ""));
        }).catch((error) => {
            return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, error.message));
        });
    });
}
exports.getModelos = getModelos;
function createModelo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const modelo = req.body;
        const conn = yield conection_1.connection();
        return yield conn.query('INSERT INTO modelos SET ?', [modelo])
            .then((response) => {
            return res.json(new ResponseGeneric_1.ResponseGeneric(response[0], 0, ""));
        }).catch((error) => {
            return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, error.message));
        });
    });
}
exports.createModelo = createModelo;
function deleteModeloById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const modeloId = req.params.modeloId;
        console.log('modeloId', modeloId);
        const conn = yield conection_1.connection();
        return yield conn.query('DELETE modelos WHERE id=?', [modeloId])
            .then((response) => {
            return res.json(new ResponseGeneric_1.ResponseGeneric(response[0], 0, ""));
        }).catch((error) => {
            return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, error.message));
        });
    });
}
exports.deleteModeloById = deleteModeloById;
function getAllModelos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let page = Number(req.params.page);
        const size = Number(req.params.size);
        if (page && size) {
            page = (page - 1) * size;
            const conn = yield conection_1.connection();
            return yield conn.query(`SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, 
        ( inv.precioVenta - (inv.precioVenta * .05) ) as precioVenta, inv.estaVendida FROM inventario inv 
        LEFT JOIN (imagen im, modelo mo )
            ON ( im.idImagen = inv.idImagen AND
                    mo.idModelo = inv.idModelo	)
        ORDER BY inv.precioVenta ASC
        LIMIT ${page}, ${size}`)
                .then((response) => {
                console.log(response);
                return res.json(new ResponseGeneric_1.ResponseGeneric(response[0], 0, ""));
            }).catch((error) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, error.message));
            });
        }
        return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, "No se encontro el modelo solicitado"));
    });
}
exports.getAllModelos = getAllModelos;
function getModeloById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const modeloId = req.params.modeloId;
        console.log('modelo: ', Buffer.from(modeloId, 'base64').toString());
        if (modeloId) {
            const modelo = Buffer.from(modeloId, 'base64').toString();
            const conn = yield conection_1.connection();
            return yield conn.query(`SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, 
                                        im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, inv.precioVenta, 
                                        inv.estaVendida FROM inventario inv 
                                LEFT JOIN (imagen im, modelo mo )
                                ON ( im.idImagen = inv.idImagen AND
                                    mo.idModelo = inv.idModelo	)
                                WHERE inv.idImagen  LIKE '%${modelo}%'`)
                .then((response) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(response[0], 0, ""));
            }).catch((error) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, error.message));
            });
        }
        return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, "No se encontro el modelo solicitado"));
    });
}
exports.getModeloById = getModeloById;
function getModeloByTalla(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const talla = Number(req.params.talla);
        console.log("getModeloByTalla,", talla);
        if (talla) {
            const conn = yield conection_1.connection();
            return yield conn.query(`SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, inv.precioVenta,		inv.estaVendida FROM inventario inv 
        LEFT JOIN (imagen im, modelo mo )
            ON ( im.idImagen = inv.idImagen AND
                     mo.idModelo = inv.idModelo	)
        WHERE inv.talla=?`, [talla])
                .then((response) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(response[0], 0, ""));
            }).catch((error) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, error.message));
            });
        }
        return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, "No se encontro el modelo solicitado"));
    });
}
exports.getModeloByTalla = getModeloByTalla;
function getModeloByTallaOrden(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const talla = Number(req.params.talla);
        const orden = req.params.orden;
        console.log("getModeloByPrecioTalla");
        if (talla && orden) {
            const conn = yield conection_1.connection();
            return yield conn.query(`SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, inv.precioVenta,		inv.estaVendida FROM inventario inv 
		LEFT JOIN (imagen im, modelo mo )
			ON ( im.idImagen = inv.idImagen AND
					 mo.idModelo = inv.idModelo	)
		WHERE inv.talla=${talla} 
		ORDER BY inv.precioVenta ${orden}`)
                .then((response) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(response[0], 0, ""));
            }).catch((error) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, error.message));
            });
        }
        return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, "No se encontro el modelo solicitado"));
    });
}
exports.getModeloByTallaOrden = getModeloByTallaOrden;
function getModeloByPrecios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const talla = Number(req.params.talla);
        const minimo = Number(req.params.minimo);
        const maximo = Number(req.params.maximo);
        console.log("getModeloByPrecios");
        if (talla && minimo && maximo) {
            const conn = yield conection_1.connection();
            return yield conn.query(`SELECT inv.idInventario, mo.modelo, inv.IdImagen, mo.descripcion, im.urlImagen, im.urlImagenThumbnail, inv.talla, inv.precioCompra,  inv.precioSugerido, inv.precioVenta,		inv.estaVendida FROM inventario inv 
		LEFT JOIN (imagen im, modelo mo )
			ON ( im.idImagen = inv.idImagen AND
					 mo.idModelo = inv.idModelo	)
		WHERE inv.talla= ${talla} AND
		inv.precioVenta BETWEEN ${minimo} AND ${maximo} 
        ORDER BY inv.precioVenta ASC `)
                .then((response) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(response[0], 0, ""));
            }).catch((error) => {
                return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, error.message));
            });
        }
        return res.json(new ResponseGeneric_1.ResponseGeneric(null, -1, "No se encontro el modelo solicitado"));
    });
}
exports.getModeloByPrecios = getModeloByPrecios;
