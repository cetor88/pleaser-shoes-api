/* eslint-disable prettier/prettier */
import cors from 'cors';
import express,{ Application, Request, Response, urlencoded  } from 'express';
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express";

import { RegisterRoutes } from "../public3/routes";
import facturaRouter from './routes/factura.router';
import modeloRouter from './routes/post.routers';
import tallaRouter from './routes/tallas.routers';

export class App{
  private app: Application;

  constructor(private port?: number | string ){
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.swaggerConfig();
    RegisterRoutes(this.app);
    // Initialize Firebase

  }

  settings(): void{
    this.app.set('port', this.port || process.env.PORT || 3000)
  }

  middlewares(): void{
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.static("public3"));
  }

  routes(): void{
    this.app.use(
      urlencoded({
        extended: true,
      })
    );
    this.app.use('/api/modelos', modeloRouter);
    this.app.use('/api/modelo/talla', tallaRouter);
    this.app.use('/api', facturaRouter);

  }

  swaggerConfig(): void {

    //this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));
    this.app.use( '/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
      return res.send(
        swaggerUi.generateHTML(await require ("../public3/swagger.json"))
      );
    },
    swaggerUi.setup(
     {
      explorer: true,
      customCssUrl: "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
     }
    ))
  }

  promiseHandler(promise: any, statusCode: any, response: any, next: any) {
    return promise
      .then((data: any) => {
        if (data) {
          response.json(data);
          response.status(statusCode || 200);
        } else {
          response.status(statusCode || 204);
          response.end();
        }
      })
      .catch((error: any) => next(error));
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async  listen() {
    await this.app.listen(this.app.get('port'), ()=> console.log('Server on Port', this.app.get('port')))
  }
}