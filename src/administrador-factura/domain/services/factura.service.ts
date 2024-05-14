import { ResponseGeneric } from "src/interfaces/ResponseGeneric";

import { FacturaResposiroryMsql } from "../../infracestructure/factura.repository";

export class FacturaServices {
  facturaResposiroryMsql: FacturaResposiroryMsql;
  constructor() {
    this.facturaResposiroryMsql = new FacturaResposiroryMsql();
  }

  public async cargaFactura(): Promise<ResponseGeneric> {
    return await this.facturaResposiroryMsql.cargaFactura();
  }
}
