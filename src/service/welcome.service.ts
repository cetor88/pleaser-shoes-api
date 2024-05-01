import { Hello } from "../interfaces/Hello";

export class WelcomeService {
  public getSaludo(nombre: string): Hello {
    return {
      mensaje: "Saliudos desde el service " + nombre,
    };
  }
}
