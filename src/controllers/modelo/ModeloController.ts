import { Controller, Get, Path, Route } from "tsoa";


/*
export function indexWelcome(req: Request, res: Response): Response {
  return res.json("Welcome my API");
}
*/

@Route("modelo")
export class ModeloController extends Controller {
  @Get("{nombre}")
  public async getMensaje(@Path() nombre: string): Promise<Hello> {
    console.log("nom-> ", nombre);
    return welcomeService.getSaludo(nombre);
  }
}
