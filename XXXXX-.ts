import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const optionsSwagger = require("./public3/swagger.json");

const swaggerDefinition: OAS3Definition = optionsSwagger;
const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["src/routes/*.routers.ts"],
};

export default swaggerJSDoc(swaggerOptions);
