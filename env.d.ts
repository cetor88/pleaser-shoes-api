declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DATABASE_URL: string;
    JWT_SECRET: string;
    // Agrega aquí otras variables de entorno que estés utilizando
  }
}
