"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
const express_1 = require("express");
const app_white_list_1 = require("../app-white-list");
const cors_1 = __importDefault(require("cors"));
const factura_controller_1 = require("../controllers/factura.controller");
const facturaRouter = express_1.Router();
facturaRouter.route('/factura')
    .get(factura_controller_1.cargaFactura, cors_1.default(app_white_list_1.coorsOptions));
exports.default = facturaRouter;
