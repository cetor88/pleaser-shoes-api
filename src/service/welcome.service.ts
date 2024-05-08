/* eslint-disable prettier/prettier */
class WelcomeService {
  public getSaludo(nombre: string): string {
    console.log("demooeoe ", nombre);
    return        "Saliudos desde el service " + nombre;
  }
}

export default new WelcomeService();