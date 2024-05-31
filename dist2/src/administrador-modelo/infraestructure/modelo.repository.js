"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeloRepositoryMysql = void 0;
/* eslint-disable prettier/prettier */
const conection_1 = require("../../conection");
class ModeloRepositoryMysql {
    async getAllModelos() {
        const conn = await conection_1.connection();
        return await conn
            .query("SELECT * FROM modelo")
            .then((response) => {
            return response[0];
        })
            .catch((error) => {
            return error;
        });
    }
}
exports.ModeloRepositoryMysql = ModeloRepositoryMysql;
