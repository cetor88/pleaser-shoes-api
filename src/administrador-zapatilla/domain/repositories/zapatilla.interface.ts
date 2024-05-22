import IZapatillaDB from "../models/zapatilla.entity";

export interface IZapatillaRepository {
  getAllZapatillas(): Promise<IZapatillaDB[]>;

  getZapatillaByModel(modelo: string): Promise<IZapatillaDB>;

  updateZapatillaByModelo(zapa: IZapatillaDB): Promise<IZapatillaDB>;

  saveZapatillaDb(zapatilla: IZapatillaDB): Promise<IZapatillaDB>; // 6.- Almacena la zapatilla en el catalogo de la base de datos
}
