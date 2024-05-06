"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
const carga_masiva_controller_1 = require("../controllers/carga-masiva.controller");
const express_1 = require("express");
const app_white_list_1 = require("../app-white-list");
const cors_1 = __importDefault(require("cors"));
const cargaMasivaRouter = express_1.Router();
/*cargaMasivaRouter.route('/archivo')
    .get(cargarMasivaCSV, cors(coorsOptions))
    */
cargaMasivaRouter.route('/archivo_refact')
    .get(carga_masiva_controller_1.cargarMasivaCSV_refact, cors_1.default(app_white_list_1.coorsOptions));
cargaMasivaRouter.route('/imagen')
    .get(carga_masiva_controller_1.getImagenFromServer, cors_1.default(app_white_list_1.coorsOptions));
exports.default = cargaMasivaRouter;
