import { Controller, Get, Route } from "tsoa";

import { FacturaServices } from "../domain/services/factura.service";

@Route("facturas")
export class FacturasController extends Controller {
  facturaServices = new FacturaServices();

  /*constructor() {
    super()
    this.facturaServices = new FacturaServices();
  }*/
  @Get()
  async getFacturas(): Promise<void> {
    console.log("getFacturas");
    this.facturaServices.cargaFactura();
  }
}
