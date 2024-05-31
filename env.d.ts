import { ServiceAccount } from "firebase-admin";

declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    //Configuracion de la base de datos
    HOST_BD: string;
    USER_BD: string;
    PASSWORD_BD: string;
    DATABASE: string;
    CONNECTION_LIMIT: number;
    // Configuracin de secreto para generar el JWT
    JWT_SECRET: string;
    // Firebase definicion
    PROJECT_ID: string;
    PRIVATE_KEY: ServiceAccount;
    CLIENT_EMAIL: string;
    DATABASE_URL: string;
    STORAGE_BUCKET: string;
  }
}
