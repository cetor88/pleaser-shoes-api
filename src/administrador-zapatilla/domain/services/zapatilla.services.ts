import { ZapatillaRepositoryMySql } from "../../../administrador-zapatilla/infraestructure/zapatilla.repository";
import IZapatillaDB from "../models/zapatilla.entity";

export class ZapatillaServices {
  zapatillaResposiroryMsql: ZapatillaRepositoryMySql;
  constructor() {
    this.zapatillaResposiroryMsql = new ZapatillaRepositoryMySql();
  }

  public async getZapatillas(): Promise<IZapatillaDB[]> {
    return await this.zapatillaResposiroryMsql.getAllZapatillas();
  }
  public async getZapatillaByModel(modelo: string): Promise<IZapatillaDB> {
    return await this.zapatillaResposiroryMsql.getZapatillaByModel(modelo);
  }

  public async saveZapatilla(zapatilla: IZapatillaDB): Promise<IZapatillaDB> {
    return await this.zapatillaResposiroryMsql.saveZapatillaDb(zapatilla);
  }

  public async updateZapatilla(zapatilla: IZapatillaDB): Promise<IZapatillaDB> {
    return await this.zapatillaResposiroryMsql.saveZapatillaDb(zapatilla);
  }
}
