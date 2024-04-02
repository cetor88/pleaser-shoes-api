/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
import { getModeloByPrecios, getModeloByTalla, getModeloByTallaOrden  } from "../controllers/modelos.controller";
import { Router } from "express";
import { coorsOptions } from "../app-white-list";
import cors from "cors";

const tallaRouter = Router();

    tallaRouter.route('/:talla')
    .get(getModeloByTalla, cors(coorsOptions));

    tallaRouter.route('/:talla/:orden')
    .get(getModeloByTallaOrden, cors(coorsOptions));

    tallaRouter.route('/:talla/:minimo/:maximo')
    .get(getModeloByPrecios, cors(coorsOptions));

    export default tallaRouter;