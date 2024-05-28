"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const mensaje_controller_1 = require("./../src/controllers/mensaje.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const ZapatillaController_1 = require("./../src/administrador-zapatilla/application/ZapatillaController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const ModeloController_1 = require("./../src/administrador-modelo/application/ModeloController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const FacturaController_1 = require("./../src/administrador-factura/application/FacturaController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const usuario_controller_1 = require("./../src/administrador/application/usuario.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "IZapatillaDB": {
        "dataType": "refObject",
        "properties": {
            "idZapatilla": { "dataType": "double", "required": true },
            "idImagen": { "dataType": "double", "required": true },
            "idModelo": { "dataType": "string", "required": true },
            "idTalla": { "dataType": "double", "required": true },
            "idFactura": { "dataType": "double", "required": true },
            "precioCompra": { "dataType": "double", "required": true },
            "precioSugerido": { "dataType": "double", "required": true },
            "precioVenta": { "dataType": "double", "required": true },
            "disponibilidad": { "dataType": "double", "required": true },
            "banVendido": { "dataType": "boolean", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IModeloDB": {
        "dataType": "refObject",
        "properties": {
            "idModelo": { "dataType": "string", "required": true },
            "descripcion": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponseGeneric": {
        "dataType": "refObject",
        "properties": {
            "payload": { "dataType": "any" },
            "code": { "dataType": "double" },
            "message": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "correo": { "dataType": "string", "required": true },
            "password": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/mensaje/:nombre', ...(runtime_1.fetchMiddlewares(mensaje_controller_1.MensajeController)), ...(runtime_1.fetchMiddlewares(mensaje_controller_1.MensajeController.prototype.getMensaje)), function MensajeController_getMensaje(request, response, next) {
        const args = {
            nombre: { "in": "path", "name": "nombre", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new mensaje_controller_1.MensajeController();
            templateService.apiHandler({
                methodName: 'getMensaje',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/zapatillas', ...(runtime_1.fetchMiddlewares(ZapatillaController_1.ZapatillaController)), ...(runtime_1.fetchMiddlewares(ZapatillaController_1.ZapatillaController.prototype.getZapatillas)), function ZapatillaController_getZapatillas(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ZapatillaController_1.ZapatillaController();
            templateService.apiHandler({
                methodName: 'getZapatillas',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/zapatillas/:modelo', ...(runtime_1.fetchMiddlewares(ZapatillaController_1.ZapatillaController)), ...(runtime_1.fetchMiddlewares(ZapatillaController_1.ZapatillaController.prototype.getZapatillasByModel)), function ZapatillaController_getZapatillasByModel(request, response, next) {
        const args = {
            modelo: { "in": "path", "name": "modelo", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ZapatillaController_1.ZapatillaController();
            templateService.apiHandler({
                methodName: 'getZapatillasByModel',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/zapatillas', ...(runtime_1.fetchMiddlewares(ZapatillaController_1.ZapatillaController)), ...(runtime_1.fetchMiddlewares(ZapatillaController_1.ZapatillaController.prototype.saveZapatillas)), function ZapatillaController_saveZapatillas(request, response, next) {
        const args = {
            zapatilla: { "in": "body", "name": "zapatilla", "required": true, "ref": "IZapatillaDB" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ZapatillaController_1.ZapatillaController();
            templateService.apiHandler({
                methodName: 'saveZapatillas',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/zapatillas', ...(runtime_1.fetchMiddlewares(ZapatillaController_1.ZapatillaController)), ...(runtime_1.fetchMiddlewares(ZapatillaController_1.ZapatillaController.prototype.updateZapatillas)), function ZapatillaController_updateZapatillas(request, response, next) {
        const args = {
            zapatilla: { "in": "body", "name": "zapatilla", "required": true, "ref": "IZapatillaDB" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ZapatillaController_1.ZapatillaController();
            templateService.apiHandler({
                methodName: 'updateZapatillas',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/modelos', ...(runtime_1.fetchMiddlewares(ModeloController_1.MoldeloController)), ...(runtime_1.fetchMiddlewares(ModeloController_1.MoldeloController.prototype.getModelo)), function MoldeloController_getModelo(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ModeloController_1.MoldeloController();
            templateService.apiHandler({
                methodName: 'getModelo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/facturas', ...(runtime_1.fetchMiddlewares(FacturaController_1.FacturasController)), ...(runtime_1.fetchMiddlewares(FacturaController_1.FacturasController.prototype.getFacturas)), function FacturasController_getFacturas(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new FacturaController_1.FacturasController();
            templateService.apiHandler({
                methodName: 'getFacturas',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/admin/login', ...(runtime_1.fetchMiddlewares(usuario_controller_1.UsuarioController)), ...(runtime_1.fetchMiddlewares(usuario_controller_1.UsuarioController.prototype.login)), function UsuarioController_login(request, response, next) {
        const args = {
            user: { "in": "body", "name": "user", "required": true, "ref": "User" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new usuario_controller_1.UsuarioController();
            templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
