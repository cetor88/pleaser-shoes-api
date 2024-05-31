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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaToken = exports.ZapatillaController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tsoa_1 = require("tsoa");
const zapatilla_services_1 = require("../domain/services/zapatilla.services");
let ZapatillaController = class ZapatillaController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.zapatillaServices = new zapatilla_services_1.ZapatillaServices();
    }
    async getZapatillas(_req, _authorization) {
        return this.zapatillaServices.getZapatillas();
    }
    async getZapatillasByModel(_req, _authorization, modelo) {
        return this.zapatillaServices.getZapatillaByModel(modelo);
    }
    async saveZapatillas(_req, _authorization, zapatilla) {
        return this.zapatillaServices.saveZapatilla(zapatilla);
    }
    async updateZapatillas(_req, _authorization, zapatilla) {
        return this.zapatillaServices.updateZapatilla(zapatilla);
    }
};
__decorate([
    tsoa_1.Middlewares(validaToken),
    tsoa_1.Get("/"),
    __param(0, tsoa_1.Request()),
    __param(1, tsoa_1.Header("Authorization")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ZapatillaController.prototype, "getZapatillas", null);
__decorate([
    tsoa_1.Middlewares(validaToken),
    tsoa_1.Get("{modelo}"),
    __param(0, tsoa_1.Request()),
    __param(1, tsoa_1.Header("Authorization")),
    __param(2, tsoa_1.Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ZapatillaController.prototype, "getZapatillasByModel", null);
__decorate([
    tsoa_1.Middlewares(validaToken),
    tsoa_1.SuccessResponse("201", "Created") // Custom success response
    ,
    tsoa_1.Post(),
    __param(0, tsoa_1.Request()),
    __param(1, tsoa_1.Header("Authorization")),
    __param(2, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ZapatillaController.prototype, "saveZapatillas", null);
__decorate([
    tsoa_1.Middlewares(validaToken),
    tsoa_1.Put(),
    tsoa_1.SuccessResponse("202", "Created") // Custom success response
    ,
    __param(0, tsoa_1.Request()),
    __param(1, tsoa_1.Header("Authorization")),
    __param(2, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ZapatillaController.prototype, "updateZapatillas", null);
ZapatillaController = __decorate([
    tsoa_1.Route("zapatillas")
], ZapatillaController);
exports.ZapatillaController = ZapatillaController;
async function validaToken(req, res, next) {
    try {
        const accessToken = req.headers.authorization || "";
        const SECRET = process.env.JWT_SECRET;
        if (!accessToken || "") {
            res.json({ respuesta: "Token invalido o requerido" });
        }
        else {
            // el token tiene un valor, será válido?
            // 1.-  validamos que contenga la palabra Bearer
            if (accessToken.indexOf("Bearer") >= 0) {
                console.log("accessToken", accessToken);
                const token = accessToken?.split(" ");
                jsonwebtoken_1.default.verify(token[1], `"${SECRET}"`, (error) => {
                    console.log("**", error);
                    if (error) {
                        res.json({ respuesta: "Token caducado" });
                    }
                    else {
                        console.log("Token validado, sin errores");
                        next();
                    }
                });
            }
            else {
                res.json({ respuesta: "Token invalido" });
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.validaToken = validaToken;
