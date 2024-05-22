import { connection } from "../../conection";
import IZapatillaDB from "../domain/models/zapatilla.entity";
import { IZapatillaRepository } from "../domain/repositories/zapatilla.interface";

export class ZapatillaRepositoryMySql implements IZapatillaRepository {
  async getAllZapatillas(): Promise<IZapatillaDB[]> {
    console.log("onsulta zapatilla: ");
    const conn = await connection();
    return await conn
      .query("SELECT * FROM zapatilla")
      .then((response) => {
        console.log("consulta zalzado", response[0]);
        return response[0];
      })
      .catch((error) => {
        return error;
      });
  }

  async getZapatillaByModel(modelo: string): Promise<IZapatillaDB> {
    console.log("onsulta zapatilla: ", modelo);
    const conn = await connection();
    return await conn
      .query(`SELECT * FROM zapatilla where idModelo = "${modelo}"`)
      .then((response) => {
        console.log("consulta zalzado", response[0]);
        return response[0];
      })
      .catch((error) => {
        return error;
      });
  }

  async updateZapatillaByModelo(zapa: IZapatillaDB): Promise<IZapatillaDB> {
    const conn = await connection();
    const sql2 = `Update zapatilla SET idModelo=${zapa.idModelo},
    idImagen=${zapa.idImagen}, idTalla=${zapa.idTalla},
    idFactura=${zapa.idFactura}, disponibilidad=${zapa.disponibilidad},
    precioCompra=${zapa.precioCompra}, precioCompra${zapa.precioCompra},
    precioSugerido=${zapa.precioSugerido}, precioVenta=${zapa.precioVenta},
    banVendido=${zapa.banVendido} where idZapatilla = ${zapa.idZapatilla}`;

    return new Promise(function (resolve, reject) {
      conn.execute(sql2).then(
        (data: any) => {
          console.log("Zapatilla insertada", data[0]);
          conn.end();
          resolve(data[0]);
        },
        (error) => {
          console.log("erro", error);
          conn.end();
          reject(new Error(error));
        }
      );
    });
  }

  async saveZapatillaDb(zapatilla: IZapatillaDB): Promise<IZapatillaDB> {
    const conn = await connection();
    const sql2 = "INSERT INTO zapatilla SET ?";
    return new Promise(async function (resolve, reject) {
      await conn.query(sql2, zapatilla).then(
        (data: any) => {
          console.log("Zapatilla insertada");
          zapatilla.idZapatilla = data[0].insertId;
          conn.end();
          resolve(zapatilla);
        },
        (error) => {
          console.log("erro", error);
          conn.end();
          reject(new Error(error));
        }
      );
    });
  }
}
