import { User } from "../interface/user.interface";
import { IUserDB } from "../models/user.entity";

export interface IUserRepository {
  findUserByEmail(user: User): Promise<IUserDB>;
}
