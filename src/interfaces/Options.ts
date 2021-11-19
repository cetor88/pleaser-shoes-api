/* eslint-disable prettier/prettier */

export interface Options{
    hostname: string;
    port: number;
    path: string;
    method: string;
    headers: any;
}

export function getHeaders(): any{
    return {
        'Content-Type':'application/json'
    }
}