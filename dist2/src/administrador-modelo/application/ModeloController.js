"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoldeloController = void 0;
const tsoa_1 = require("tsoa");
const modelo_services_1 = require("../domain/services/modelo.services");
let MoldeloController = class MoldeloController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.modeloServices = new modelo_services_1.ModeloServices();
    }
    async getModelo() {
        //const modeloService = new ModeloServices();
        return await this.modeloServices.obtenerModelos();
    }
};
__decorate([
    tsoa_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoldeloController.prototype, "getModelo", null);
MoldeloController = __decorate([
    tsoa_1.Route("modelos")
], MoldeloController);
exports.MoldeloController = MoldeloController;
