import IModeloDB from "../models/modelo.entity";

export interface IModeloRepository {
  getAllModelos(): Promise<Array<IModeloDB>>;
}
