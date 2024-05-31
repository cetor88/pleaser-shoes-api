import * as express from "express";
import jwt from "jsonwebtoken";
import {
  Body,
  Controller,
  Get,
  Header,
  Middlewares,
  Path,
  Post,
  Put,
  Request,
  Route,
  SuccessResponse,
} from "tsoa";

import IZapatillaDB from "../domain/models/zapatilla.entity";
import { ZapatillaServices } from "../domain/services/zapatilla.services";

@Route("zapatillas")
export class ZapatillaController extends Controller {
  zapatillaServices = new ZapatillaServices();

  @Middlewares(validaToken)
  @Get("/")
  async getZapatillas(
    @Request() _req: Request,
    @Header("Authorization") _authorization: string
  ): Promise<IZapatillaDB[]> {
    return this.zapatillaServices.getZapatillas();
  }

  @Middlewares(validaToken)
  @Get("{modelo}")
  async getZapatillasByModel(
    @Request() _req: Request,
    @Header("Authorization") _authorization: string,
    @Path() modelo: string
  ): Promise<IZapatillaDB> {
    return this.zapatillaServices.getZapatillaByModel(modelo);
  }

  @Middlewares(validaToken)
  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  async saveZapatillas(
    @Request() _req: Request,
    @Header("Authorization") _authorization: string,
    @Body() zapatilla: IZapatillaDB
  ): Promise<IZapatillaDB> {
    return this.zapatillaServices.saveZapatilla(zapatilla);
  }

  @Middlewares(validaToken)
  @Put()
  @SuccessResponse("202", "Created") // Custom success response
  async updateZapatillas(
    @Request() _req: Request,
    @Header("Authorization") _authorization: string,
    @Body() zapatilla: IZapatillaDB
  ): Promise<IZapatillaDB> {
    return this.zapatillaServices.updateZapatilla(zapatilla);
  }
}

export async function validaToken(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  try {
    const accessToken = req.headers.authorization || "";
    const SECRET = process.env.JWT_SECRET;
    if (!accessToken || "") {
      res.json({ respuesta: "Token invalido o requerido" });
    } else {
      // el token tiene un valor, será válido?
      // 1.-  validamos que contenga la palabra Bearer
      if (accessToken.indexOf("Bearer") >= 0) {
        console.log("accessToken", accessToken);
        const token = accessToken?.split(" ");
        jwt.verify(token[1], `"${SECRET}"`, (error) => {
          console.log("**", error);
          if (error) {
            res.json({ respuesta: "Token caducado" });
          } else {
            console.log("Token validado, sin errores");
            next();
          }
        });
      } else {
        res.json({ respuesta: "Token invalido" });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
