import { Controller, Get, Path, Route } from "tsoa";

import welcomeService from "../service/welcome.service";

@Route("mensaje")
export class MensajeController extends Controller {
  @Get("{nombre}")
  public async getMensaje(@Path() nombre: string): Promise<string> {
    console.log("nom-> ", nombre);
    return welcomeService.getSaludo(nombre) + "";
  }
}
