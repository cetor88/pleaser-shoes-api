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
exports.ZapatillaRepositoryMySql = void 0;
const conection_1 = require("../../conection");
class ZapatillaRepositoryMySql {
    getAllZapatillas() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("onsulta zapatilla: ");
            const conn = yield conection_1.connection();
            return yield conn
                .query("SELECT * FROM zapatilla")
                .then((response) => {
                console.log("consulta zalzado", response[0]);
                return response[0];
            })
                .catch((error) => {
                return error;
            });
        });
    }
    getZapatillaByModel(modelo) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("onsulta zapatilla: ", modelo);
            const conn = yield conection_1.connection();
            return yield conn
                .query(`SELECT * FROM zapatilla where idModelo = "${modelo}"`)
                .then((response) => {
                console.log("consulta zalzado", response[0]);
                return response[0];
            })
                .catch((error) => {
                return error;
            });
        });
    }
    updateZapatillaByModelo(zapa) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield conection_1.connection();
            const sql2 = `Update zapatilla SET idModelo=${zapa.idModelo},
    idImagen=${zapa.idImagen}, idTalla=${zapa.idTalla},
    idFactura=${zapa.idFactura}, disponibilidad=${zapa.disponibilidad},
    precioCompra=${zapa.precioCompra}, precioCompra${zapa.precioCompra},
    precioSugerido=${zapa.precioSugerido}, precioVenta=${zapa.precioVenta},
    banVendido=${zapa.banVendido} where idZapatilla = ${zapa.idZapatilla}`;
            return new Promise(function (resolve, reject) {
                conn.execute(sql2).then((data) => {
                    console.log("Zapatilla insertada", data[0]);
                    conn.end();
                    resolve(data[0]);
                }, (error) => {
                    console.log("erro", error);
                    conn.end();
                    reject(new Error(error));
                });
            });
        });
    }
    saveZapatillaDb(zapatilla) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield conection_1.connection();
            const sql2 = "INSERT INTO zapatilla SET ?";
            return new Promise(function (resolve, reject) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield conn.query(sql2, zapatilla).then((data) => {
                        console.log("Zapatilla insertada");
                        zapatilla.idZapatilla = data[0].insertId;
                        conn.end();
                        resolve(zapatilla);
                    }, (error) => {
                        console.log("erro", error);
                        conn.end();
                        reject(new Error(error));
                    });
                });
            });
        });
    }
}
exports.ZapatillaRepositoryMySql = ZapatillaRepositoryMySql;
