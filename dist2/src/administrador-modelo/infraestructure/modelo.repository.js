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
exports.ModeloRepositoryMysql = void 0;
/* eslint-disable prettier/prettier */
const conection_1 = require("../../conection");
class ModeloRepositoryMysql {
    getAllModelos() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield conection_1.connection();
            return yield conn
                .query("SELECT * FROM modelo")
                .then((response) => {
                return response[0];
            })
                .catch((error) => {
                return error;
            });
        });
    }
}
exports.ModeloRepositoryMysql = ModeloRepositoryMysql;
