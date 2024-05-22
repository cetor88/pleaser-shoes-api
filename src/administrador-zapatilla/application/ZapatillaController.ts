import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";

import IZapatillaDB from "../domain/models/zapatilla.entity";
import { ZapatillaServices } from "../domain/services/zapatilla.services";

@Route("zapatillas")
export class ZapatillaController extends Controller {
  zapatillaServices = new ZapatillaServices();

  @Get("/")
  async getZapatillas(): Promise<IZapatillaDB[]> {
    return this.zapatillaServices.getZapatillas();
  }

  @Get("{modelo}")
  async getZapatillasByModel(@Path() modelo: string): Promise<IZapatillaDB> {
    return this.zapatillaServices.getZapatillaByModel(modelo);
  }

  @Post()
  async saveZapatillas(@Body() zapatilla: IZapatillaDB): Promise<IZapatillaDB> {
    return this.zapatillaServices.saveZapatilla(zapatilla);
  }

  @Put()
  // eslint-disable-next-line prettier/prettier
  async updateZapatillas(@Body() zapatilla: IZapatillaDB): Promise<IZapatillaDB> {
    return this.zapatillaServices.updateZapatilla(zapatilla);
  }
}
