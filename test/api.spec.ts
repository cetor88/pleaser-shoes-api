import request from "supertest";

import { App } from "../src/app";

describe("GET /api", () => {
  it("should return 200 OK", () => {
    const app = new App(3000);
    return request(app).get("/api").expect(200);
  });
});
