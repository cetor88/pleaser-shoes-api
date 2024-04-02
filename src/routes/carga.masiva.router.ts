/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
import { cargarMasivaCSV, cargarMasivaCSV_refact, getImagenFromServer } from "../controllers/carga-masiva.controller";
import { Router } from "express";
import { coorsOptions } from "../app-white-list";
import cors from "cors";

const cargaMasivaRouter = Router();

cargaMasivaRouter.route('/archivo')
    .get(cargarMasivaCSV, cors(coorsOptions))
    
cargaMasivaRouter.route('/archivo_refact')
.get(cargarMasivaCSV_refact, cors(coorsOptions))

cargaMasivaRouter.route('/imagen')
    .get(getImagenFromServer, cors(coorsOptions))
    

export default cargaMasivaRouter;
