import { connection } from "../../conection";
import { User } from "../domain/interface/user.interface";
import { IUserDB } from "../domain/models/user.entity";
import { IUserRepository } from "../domain/repositories/usuer.interface";

export class UserRepositoryMysql implements IUserRepository {
  async findUserByEmail(usuario: User): Promise<IUserDB> {
    console.log("Consulta correo: ", usuario.correo);
    const conn = await connection();
    return await conn
      .query(
        `SELECT * FROM usuario where correo = "${usuario.correo}" and password = "${usuario.password}"`
      )
      .then((response) => {
        console.log("consulta usuario", response[0]);
        return response[0];
      })
      .catch((error) => {
        return error;
      });
  }
}
