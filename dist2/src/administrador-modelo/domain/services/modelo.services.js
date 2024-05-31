"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeloServices = void 0;
const modelo_repository_1 = require("../../infraestructure/modelo.repository");
class ModeloServices {
    constructor() {
        this.modeloRepositoryMysql = new modelo_repository_1.ModeloRepositoryMysql();
    }
    async obtenerModelos() {
        return await this.modeloRepositoryMysql.getAllModelos();
    }
}
exports.ModeloServices = ModeloServices;
