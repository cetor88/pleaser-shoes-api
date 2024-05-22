"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
/* eslint-disable prettier/prettier */
//import { mysql } from "mysql";
const promise_1 = require("mysql2/promise");
/**
 * Start Connection MySQL.
 */
function connection() {
    return __awaiter(this, void 0, void 0, function* () {
        return promise_1.createPool({
            host: 'localhost',
            user: 'root',
            password: '12345678',
            database: 'pleaser-shoes',
            connectionLimit: 3,
            typeCast: function castField(field, useDefaultTypeCasting) {
                // We only want to cast bit fields that have a single-bit in them. If the field
                // has more than one bit, then we cannot assume it is supposed to be a Boolean.
                console.log("field.type", field.type, typeof (field.type));
                console.log("field.length === 1", field.length, typeof (field.length));
                if ((field.type === "BIT") && (field.length === "1")) {
                    console.log("casteing");
                    const bytes = field.buffer();
                    // A Buffer in Node represents a collection of 8-bit unsigned integers.
                    // Therefore, our single "bit field" comes back as the bits '0000 0001',
                    // which is equivalent to the number 1.
                    return (bytes[0] === 1);
                }
                return (useDefaultTypeCasting());
            }
        });
    });
}
exports.connection = connection;
