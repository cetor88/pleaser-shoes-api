"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coorsOptions = void 0;
/* eslint-disable prettier/prettier */
const whiteList = ["http://localhost:3000"];
// eslint-disable-next-line prettier/prettier
exports.coorsOptions = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin)) {
            callback(null, true);
            // eslint-disable-next-line prettier/prettier
        }
        else {
            callback(new Error("Not allow by COORS"));
        }
    },
};
