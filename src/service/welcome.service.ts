import { Hello } from "../interfaces/Hello";

class WelcomeService {
  public getSaludo(nombre: string): Hello {
    console.log("demooeoe ", nombre);
    return {
      mensaje: "Saliudos desde el service " + nombre,
    };
  }
}

export default new WelcomeService();
