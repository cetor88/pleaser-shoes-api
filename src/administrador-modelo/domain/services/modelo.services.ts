import { ModeloRepositoryMysql } from "../../infraestructure/modelo.repository";
import IModeloDB from "../models/modelo.entity";

export class ModeloServices {
  modeloRepositoryMysql = new ModeloRepositoryMysql();

  public async obtenerModelos(): Promise<IModeloDB[]> {
    return await this.modeloRepositoryMysql.getAllModelos();
  }
}
