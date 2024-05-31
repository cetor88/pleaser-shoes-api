"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
/**
 * Start Express server.
 */
async function main() {
    const app = new app_1.App(3000);
    await app.listen();
}
main();
