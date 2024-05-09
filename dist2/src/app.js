"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
/* eslint-disable prettier/prettier */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = require("../public3/routes");
const factura_router_1 = __importDefault(require("./routes/factura.router"));
const post_routers_1 = __importDefault(require("./routes/post.routers"));
const tallas_routers_1 = __importDefault(require("./routes/tallas.routers"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
        this.swaggerConfig();
        routes_1.RegisterRoutes(this.app);
        // Initialize Firebase
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public3"));
    }
    routes() {
        this.app.use(express_1.urlencoded({
            extended: true,
        }));
        this.app.use('/api/modelos', post_routers_1.default);
        this.app.use('/api/modelo/talla', tallas_routers_1.default);
        this.app.use('/api', factura_router_1.default);
    }
    swaggerConfig() {
        //this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));
        this.app.use('/docs', swagger_ui_express_1.default.serve, (_req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.send(swagger_ui_express_1.default.generateHTML(yield require("../public3/swagger.json")));
        }), swagger_ui_express_1.default.setup({
            explorer: true,
            customCssUrl: "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
        }));
    }
    promiseHandler(promise, statusCode, response, next) {
        return promise
            .then((data) => {
            if (data) {
                response.json(data);
                response.status(statusCode || 200);
            }
            else {
                response.status(statusCode || 204);
                response.end();
            }
        })
            .catch((error) => next(error));
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'), () => console.log('Server on Port', this.app.get('port')));
        });
    }
}
exports.App = App;
