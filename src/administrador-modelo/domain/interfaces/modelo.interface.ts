export interface IModeloRepository {
  getAllModelos(): Promise<Array<any>>;

  getModeloById(idModelo: number): Promise<any>;

  getModeloByTalla(idTalla: number): Promise<any>;

  getModeloByTallaPrecio(talla: number, precio: number): Promise<any>;

  getModeloByPrecio(precio: number): Promise<Array<any>>;

  addModelo(modelo: any): Promise<any>;

  deleteModelo(idModelo: number): Promise<any>;
}
