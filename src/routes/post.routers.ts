/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
import { createModelo, deleteModeloById, getAllModelos, getModeloById  } from "../controllers/modelos.controller";
import { Router } from "express";
import { coorsOptions } from "../app-white-list";
import cors from "cors";

const modeloRouter = Router();

modeloRouter.route('/:page/:size')
    .get(getAllModelos, cors(coorsOptions))
    .post(createModelo, cors(coorsOptions));

    modeloRouter.route('/:modeloId')
    .get(getModeloById, cors(coorsOptions))
    .delete(deleteModeloById, cors(coorsOptions));    

export default modeloRouter;
