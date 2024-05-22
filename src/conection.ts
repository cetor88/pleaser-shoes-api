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
        connectionLimit: 3,
        typeCast: function castField( field, useDefaultTypeCasting ) {
            // We only want to cast bit fields that have a single-bit in them. If the field
            // has more than one bit, then we cannot assume it is supposed to be a Boolean.
            console.log("field.type", field.type, typeof(field.type));
            console.log("field.length === 1", field.length, typeof(field.length));
            if ( ( field.type === "BIT" ) && ( field.length === "1" ) ) {
                console.log("casteing")
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