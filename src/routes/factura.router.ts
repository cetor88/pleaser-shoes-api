/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
import { Router } from "express";
import { coorsOptions } from "../app-white-list";
import cors from "cors";
import { cargaFactura } from "../controllers/factura/factura.controller";

const facturaRouter = Router();

facturaRouter.route('/factura')
    .get(cargaFactura, cors(coorsOptions))
    

export default facturaRouter;
