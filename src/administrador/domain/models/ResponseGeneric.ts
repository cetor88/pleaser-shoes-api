/* eslint-disable prettier/prettier */

export class ResponseGeneric {
 

    constructor(public payload?: any, public code?: number, public message?: string){
        
        this.payload= payload;
        this.code = code;
        this.message = message;
    }
}