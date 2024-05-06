"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WelcomeService {
    getSaludo(nombre) {
        console.log("demooeoe ", nombre);
        return {
            mensaje: "Saliudos desde el service " + nombre,
        };
    }
}
exports.default = new WelcomeService();
