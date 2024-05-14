/* eslint-disable prettier/prettier */
import { connection } from "../../conection";
import IModeloDB from "../domain/models/modelo.entity";
import { IModeloRepository } from "../domain/repositories/ModeloInterface";

export class ModeloRepositoryMysql implements IModeloRepository {
  
  async getAllModelos(): Promise<IModeloDB[]> {
    const conn = await connection();
    return await conn
      .query("SELECT * FROM modelo")
      .then((response) => {
        return response[0];
      })
      .catch((error) => {
        return error;
      });
  }
}
