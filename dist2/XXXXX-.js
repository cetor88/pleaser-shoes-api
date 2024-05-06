"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const optionsSwagger = require("./public3/swagger.json");
const swaggerDefinition = optionsSwagger;
const swaggerOptions = {
    swaggerDefinition,
    apis: ["src/routes/*.routers.ts"],
};
exports.default = swagger_jsdoc_1.default(swaggerOptions);
