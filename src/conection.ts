/* eslint-disable prettier/prettier */
//import { mysql } from "mysql";
import { createPool, Pool } from "mysql2/promise";

/**
 * Start Connection MySQL.
 */
export async function connection (): Promise<Pool>{

    const CONNECTION_LIMIT = Number(process.env.CONNECTION_LIMIT);

    const HOST = process.env.HOST_BD;
    const USER = process.env.USER_BD;
    const PASSWORD = process.env.PASSWORD_BD;
    const DATABASE = process.env.DATABASE;

    return createPool({
        host: `${HOST}`,
        user: `${USER}`,
        password: `${PASSWORD}`,
        database: `${DATABASE}`,
        connectionLimit: CONNECTION_LIMIT,
        typeCast: function castField( field, useDefaultTypeCasting ) {
            // We only want to cast bit fields that have a single-bit in them. If the field
            // has more than one bit, then we cannot assume it is supposed to be a Boolean.
            if ( ( field.type === "BIT" ) && ( field.length === "1" ) ) {
                const bytes = field.buffer();
                // A Buffer in Node represents a collection of 8-bit unsigned integers.
                // Therefore, our single "bit field" comes back as the bits '0000 0001',
                // which is equivalent to the number 1.
                return( bytes[ 0 ] === 1 );
            }
            return( useDefaultTypeCasting() );
        }
    })
}