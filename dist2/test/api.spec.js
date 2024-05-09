"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../src/app");
describe("GET /docs", () => {
    it("should return 200 OK", () => {
        const app = new app_1.App(3000);
        return supertest_1.default(app).get("/docs").expect(200);
    });
});
