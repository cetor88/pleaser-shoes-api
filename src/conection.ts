/* eslint-disable prettier/prettier */
//import { mysql } from "mysql";
import { createPool, Pool } from "mysql2/promise";

/**
 * Start Connection MySQL.
 */
export async function connection (): Promise<Pool>{

    return createPool({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'pleaser-shoes',
        connectionLimit: 3
    })
}