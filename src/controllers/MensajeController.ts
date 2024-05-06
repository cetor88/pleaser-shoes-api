import { Controller, Get, Path, Route } from "tsoa";

import { Hello } from "../interfaces/Hello";
import welcomeService from "../service/welcome.service";

/*
export function indexWelcome(req: Request, res: Response): Response {
  return res.json("Welcome my API");
}
*/

@Route("mensaje")
export class MensajeController extends Controller {
  @Get("{nombre}")
  public async getMensaje(@Path() nombre: string): Promise<Hello> {
    console.log("nom-> ", nombre);
    return welcomeService.getSaludo(nombre);
  }
}
