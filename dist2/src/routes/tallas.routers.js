"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
const modelos_controller_1 = require("../controllers/modelos.controller");
const express_1 = require("express");
const app_white_list_1 = require("../app-white-list");
const cors_1 = __importDefault(require("cors"));
const tallaRouter = express_1.Router();
tallaRouter.route('/:talla')
    .get(modelos_controller_1.getModeloByTalla, cors_1.default(app_white_list_1.coorsOptions));
tallaRouter.route('/:talla/:orden')
    .get(modelos_controller_1.getModeloByTallaOrden, cors_1.default(app_white_list_1.coorsOptions));
tallaRouter.route('/:talla/:minimo/:maximo')
    .get(modelos_controller_1.getModeloByPrecios, cors_1.default(app_white_list_1.coorsOptions));
exports.default = tallaRouter;
