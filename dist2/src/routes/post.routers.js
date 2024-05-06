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
const modeloRouter = express_1.Router();
modeloRouter.route('/:page/:size')
    .get(modelos_controller_1.getAllModelos, cors_1.default(app_white_list_1.coorsOptions))
    .post(modelos_controller_1.createModelo, cors_1.default(app_white_list_1.coorsOptions));
modeloRouter.route('/:modeloId')
    .get(modelos_controller_1.getModeloById, cors_1.default(app_white_list_1.coorsOptions))
    .delete(modelos_controller_1.deleteModeloById, cors_1.default(app_white_list_1.coorsOptions));
exports.default = modeloRouter;
