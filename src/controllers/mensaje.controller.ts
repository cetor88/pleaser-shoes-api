import { Controller, Example, Get, Path, Route } from "tsoa";

import { Hello } from "../interfaces/Hello";
import { WelcomeService } from "../service/welcome.service";
/*
export function indexWelcome(req: Request, res: Response): Response {
  return res.json("Welcome my API");
}
*/

@Route("mensaje")
export class MensajeController extends Controller {
  @Example<Hello>({
    mensaje: "Saludos Hector",
  })
  @Get("{nombre}")
  public async getMensaje(@Path() nombre: string): Promise<Hello> {
    return new WelcomeService().getSaludo(nombre);
  }
}
