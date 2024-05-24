import { Controller, Put, Route } from "tsoa";

import { ResponseGeneric } from "../../administrador/domain/models/ResponseGeneric";
import { FacturaServices } from "../domain/services/factura.service";

@Route("facturas")
export class FacturasController extends Controller {
  facturaServices = new FacturaServices();

  /*constructor() {
    super()
    this.facturaServices = new FacturaServices();
  }*/
  @Put()
  async getFacturas(): Promise<ResponseGeneric> {
    console.log("getFacturas");
    return this.facturaServices.cargaFactura();
  }
}
