/* eslint-disable prettier/prettier */
//import { mysql } from "mysql";
import { createPool, Pool } from "mysql2/promise";

/**
 * Start Connection MySQL.
 */
export async function connection (): Promise<Pool>{

    return await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pleaser-shoes',
        connectionLimit: 10
    })
}