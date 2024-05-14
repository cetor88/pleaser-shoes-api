import { Controller, Get, Route } from "tsoa";

@Route("zapatillas")
export class ZapatillaController extends Controller {
  @Get()
  async getZapatillas(): Promise<void> {
    console.log("getZapatillas");
  }
}
