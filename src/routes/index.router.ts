/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line simple-import-sort/imports
import { indexWelcome } from "../controllers/api";
import { Router } from "express";

const getRouter = Router();

getRouter.route('/').get(indexWelcome);

export default getRouter;
