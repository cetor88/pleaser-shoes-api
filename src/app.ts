/* eslint-disable prettier/prettier */
import cors from 'cors';
import express,{ Application } from 'express';
import morgan from 'morgan';

import facturaRouter from './routes/factura.router';
import getRouter from './routes/index.router';
import modeloRouter from './routes/post.routers';
import tallaRouter from './routes/tallas.routers';


export class App{
  private app: Application;

  constructor(private port?: number | string ){
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    // Initialize Firebase
    
  }
  
  settings(): void{
    this.app.set('port', this.port || process.env.PORT || 3000)
  }
  
  middlewares(): void{
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  routes(): void{
    this.app.use(getRouter);
    this.app.use('/api/modelos', modeloRouter);
    this.app.use('/api/modelo/talla', tallaRouter);
    //this.app.use('/carga', cargaMasivaRouter);
    this.app.use('/api', facturaRouter);

  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async  listen() {
    await this.app.listen(this.app.get('port'), ()=> console.log('Server on Port', this.app.get('port')))
  }
}