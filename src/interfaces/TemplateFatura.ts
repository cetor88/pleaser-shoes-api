/* eslint-disable prettier/prettier */
export interface TemplateFatura {
  noFactura: string;
  fechaFactura:string;
  modelos: Array<ModeloFactura>;
}

export interface ModeloFactura{
  modelo: string;
  tallas: Array<number>;
}