"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZapatillaServices = void 0;
const zapatilla_repository_1 = require("../../../administrador-zapatilla/infraestructure/zapatilla.repository");
class ZapatillaServices {
    constructor() {
        this.zapatillaResposiroryMsql = new zapatilla_repository_1.ZapatillaRepositoryMySql();
    }
    async getZapatillas() {
        return await this.zapatillaResposiroryMsql.getAllZapatillas();
    }
    async getZapatillaByModel(modelo) {
        return await this.zapatillaResposiroryMsql.getZapatillaByModel(modelo);
    }
    async saveZapatilla(zapatilla) {
        return await this.zapatillaResposiroryMsql.saveZapatillaDb(zapatilla);
    }
    async updateZapatilla(zapatilla) {
        return await this.zapatillaResposiroryMsql.updateZapatillaByModelo(zapatilla);
    }
}
exports.ZapatillaServices = ZapatillaServices;
