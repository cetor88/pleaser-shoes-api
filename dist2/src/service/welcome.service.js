"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
class WelcomeService {
    getSaludo(nombre) {
        console.log("demooeoe ", nombre);
        return "Saliudos desde el service " + nombre;
    }
}
exports.default = new WelcomeService();
