/* eslint-disable prettier/prettier */
import cors from 'cors';
import express,{ Application, Request, Response, urlencoded  } from 'express';
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express";

import { MensajeController } from './controllers/mensaje.controller';
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

    const mensaje = new MensajeController();
    this.app.use("/mensaje", mensaje.getMensaje.bind(mensaje));

  }

  swaggerConfig(): void {

    //this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));
    this.app.use('/docs', swaggerUi.serve,async (_req: Request, res: Response) => {
      return res.send(
        swaggerUi.generateHTML(await require ("../public3/swagger.json"))
      );      
    })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async  listen() {
    await this.app.listen(this.app.get('port'), ()=> console.log('Server on Port', this.app.get('port')))
  }
}