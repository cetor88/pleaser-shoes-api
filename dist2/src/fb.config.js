"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fb = void 0;
/* eslint-disable prettier/prettier */
const app_1 = require("firebase/app");
const firebaseConfig = {
    apiKey: "AIzaSyCg-gtV-iFQBOXlkMCXWjzWWz-_ycgOj18",
    authDomain: "el-rey-33b3b.firebaseapp.com",
    databaseURL: "https://el-rey-33b3b-default-rtdb.firebaseio.com",
    projectId: "el-rey-33b3b",
    storageBucket: "el-rey-33b3b.appspot.com",
    messagingSenderId: "299953374596",
    appId: "1:299953374596:web:1ae468eacd1f591182c9d1",
    measurementId: "G-NMFQ612L8X"
};
exports.fb = app_1.initializeApp(firebaseConfig);
