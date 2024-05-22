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
exports.ZapatillaServices = void 0;
const zapatilla_repository_1 = require("../../../administrador-zapatilla/infraestructure/zapatilla.repository");
class ZapatillaServices {
    constructor() {
        this.zapatillaResposiroryMsql = new zapatilla_repository_1.ZapatillaRepositoryMySql();
    }
    getZapatillas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.zapatillaResposiroryMsql.getAllZapatillas();
        });
    }
    getZapatillaByModel(modelo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.zapatillaResposiroryMsql.getZapatillaByModel(modelo);
        });
    }
    saveZapatilla(zapatilla) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.zapatillaResposiroryMsql.saveZapatillaDb(zapatilla);
        });
    }
    updateZapatilla(zapatilla) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.zapatillaResposiroryMsql.updateZapatillaByModelo(zapatilla);
        });
    }
}
exports.ZapatillaServices = ZapatillaServices;
