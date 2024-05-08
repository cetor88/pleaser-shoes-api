import { ModeloRepositoryMysql } from "src/administrador-modelo/infraestructure/ModeloRepository";

import IModeloDB from "../models/modelo.entity";

class ModeloServices {
  modeloRepositoryMysql: ModeloRepositoryMysql;

  constructor() {
    this.modeloRepositoryMysql = new ModeloRepositoryMysql();
  }
  public async obtenerModelos(): Promise<Array<IModeloDB>> {
    return await this.modeloRepositoryMysql.getAllModelos();
  }
}

export default new ModeloServices();
