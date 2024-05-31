"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZapatillaRepositoryMySql = void 0;
const conection_1 = require("../../conection");
class ZapatillaRepositoryMySql {
    async getAllZapatillas() {
        console.log("onsulta zapatilla: ");
        const conn = await conection_1.connection();
        return await conn
            .query("SELECT * FROM zapatilla")
            .then((response) => {
            console.log("consulta zalzado", response[0]);
            return response[0];
        })
            .catch((error) => {
            return error;
        });
    }
    async getZapatillaByModel(modelo) {
        console.log("onsulta zapatilla: ", modelo);
        const conn = await conection_1.connection();
        return await conn
            .query(`SELECT * FROM zapatilla where idModelo = "${modelo}"`)
            .then((response) => {
            console.log("consulta zalzado", response[0]);
            return response[0];
        })
            .catch((error) => {
            return error;
        });
    }
    async updateZapatillaByModelo(zapa) {
        const conn = await conection_1.connection();
        const sql2 = `Update zapatilla SET idModelo="${zapa.idModelo}",
    idImagen=${zapa.idImagen}, idTalla=${zapa.idTalla},
    idFactura="${zapa.idFactura}", disponibilidad=${zapa.disponibilidad},
    precioCompra=${zapa.precioCompra},precioSugerido=${zapa.precioSugerido},
    precioVenta=${zapa.precioVenta},
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
    }
    async saveZapatillaDb(zapatilla) {
        const conn = await conection_1.connection();
        const sql2 = "INSERT INTO zapatilla SET ?";
        return new Promise(async function (resolve, reject) {
            await conn.query(sql2, zapatilla).then((data) => {
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
    }
}
exports.ZapatillaRepositoryMySql = ZapatillaRepositoryMySql;
