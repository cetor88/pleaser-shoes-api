import { Body, Controller, Post, Route } from "tsoa";

import { ResponseGeneric } from "../../administrador/domain/models/ResponseGeneric";
import { User } from "../domain/interface/user.interface";
import { UsuarioService } from "../domain/service/user.service";

@Route("admin")
export class UsuarioController extends Controller {
  userService: UsuarioService;

  constructor() {
    super();
    this.userService = new UsuarioService();
  }

  @Post("/login")
  async login(@Body() user: User): Promise<ResponseGeneric> {
    console.log("login");
    return this.userService.login(user);
  }
}
