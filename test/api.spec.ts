import request from "supertest";

import { App } from "../src/app";

describe("GET /docs", () => {
  it("should return 200 OK", () => {
    const app = new App(3000);
    return request(app).get("/docs").expect(200);
  });
});
