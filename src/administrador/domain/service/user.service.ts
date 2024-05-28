// import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { UserRepositoryMysql } from "../../infraestructure/user.repository";
import { User } from "../interface/user.interface";
import { ResponseGeneric } from "../models/ResponseGeneric";
import { IUserDB } from "../models/user.entity";

export class UsuarioService {
  userRepositoryMysql: UserRepositoryMysql;

  constructor() {
    this.userRepositoryMysql = new UserRepositoryMysql();
  }
  public async login(user: User): Promise<ResponseGeneric> {
    const resp = new ResponseGeneric();
    // eslint-disable-next-line prettier/prettier
    const userDB: IUserDB = await this.userRepositoryMysql.findUserByEmail(user);
    if (!userDB) {
      console.error("No existe el usuario");
      resp.code = -1;
      resp.message = "No existe el usuario";
      resp.payload = null;
    } else {
      console.log("El usuario si existe");
      resp.code = 0;
      resp.message = "Usuario autenticado";
      const token = await this.genarateToken({ user: userDB.correo });
      console.log("Token> ", token);
      resp.payload = token;
    }
    return resp;
  }

  public async genarateToken(user: any): Promise<string> {
    return jwt.sign(user, `"${process.env.JWT_SECRET}"`, { expiresIn: "5m" });
  }
}
