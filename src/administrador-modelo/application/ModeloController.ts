import { Controller, Get, Route } from "tsoa";

import IModeloDB from "../domain/models/modelo.entity";
import { ModeloServices } from "../domain/services/modelo.services";

@Route("modelos")
export class MoldeloController extends Controller {
  modeloServices = new ModeloServices();
  @Get()
  async getModelo(): Promise<IModeloDB[]> {
    //const modeloService = new ModeloServices();
    return await this.modeloServices.obtenerModelos();
  }
}
