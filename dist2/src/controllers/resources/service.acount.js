"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage_Ref = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const service_acount = {
    projectId: "el-rey-33b3b",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDWr2BMO4RbDfeX\naUP3roxTZbVF0C8HdT1ixdsBluPF3gw00787Yjj7WFL16qta9fU/06tLJYpXB8aZ\nFBPcZ7bN1GNDd/pVU9olqUHpUSspHMPq12v+tVDcIRw0nP4vUjaDOm9OluEIeNYF\nMZMuh+jE1+iI3cXSvXc/dLz0X685AMqWRjyldp1mCRTvrr1a7+lxqnTZ+cWUFwog\n3TV6TDI5u9nZRNTZKCghz8k7j7RWLrGTusNxxUr0ZHTZ4KY7MvwqnoG/wm7Ycrp7\nimQLS5Mf932yjq1PKlVZaFFkSJN9i8YrcTE9diwshVF7oG8b/t7H/cz1Kd9YXmNN\nWGnvb3a3AgMBAAECggEAZouOq9sh9XxOb3xQgtZVIODMHXS7ggx2Ld/kJHY2hiTy\nH6mlBnB8V1JxDhXxk5k4dCxe/Z4I3llQe34jnnvLzbVNVMTSRj+vS531ZcTnoNOk\noWAUra1d2kfWeSskHuZeM4CN+jQHeUx+rixn6Snx/VRENlv4ShlGBIF2YCP0Rn1C\nUAx/CwA+V6AQWeyo/xF1/xtZy8SXacHjCi4TRttGuFeNbS9HOkjHEGQwGk9al/cH\nWadSGLt0XfJCwwQyTnOxS/H4QrgQj+eNc6rhDORvNmdeUHqppUCiTdNedTvINyEU\nhYzDjtlF+TtsAjSWM/srLTg3qgAE3gE7YUzIfY6eAQKBgQDsH/NQQxWnVQVmab1y\nfKKiSjZnXyt/kc5bBbqJWG1WMckx68F7tSlFW5bawvX7Ol1dRBcPc7ASLgeMOumI\n5K9cPbpTlEAL8Zyjl1z6se9sOWLXELdoid/CZvEe7Wudd6uhQpyPJyZWtFMug2Uj\nREj7FiC4Gc1m5hDwWo7sWQsQoQKBgQDowXBvwfevR6fT/oqetcjzifgiW1m6q+o9\nTV8DXb6PdOQme4IA8Ay+lfqlFC5CLOE7k1zzQY3R6yRP4XGK9xQUpJJ/hIwbhohj\neaqG7A8M1tNJmhztPEbp+OVmVvvcjLOgcHEdpD15212ZmdJKAZHp6CMLSXh7FF7n\n1qdj/OrQVwKBgQCcA4hakdiu1UhaIKeiC6PRo0NLDeDJy2cTUTetJBYqC38qUuFm\ngY6hWyDTrlmlAy1JQIIUHZZKjMtD5nEDmEYdplOEgcHHon6iwJIYupS9ZzVdcJge\npGqKIkZS7wBZ7QYj6MVU+MMmKsODSiH7KVUnQbmgqrvCr2SlytAAbd0XwQKBgFf3\nrAgA9hx/53Ue0cM0DzPEJEzP27TKfqgWkt9R0dCkLApDSZoTH630Pxue6fDGx4Vd\np5akYvZAeaPbH6+WvDclD90z+kP475kxBXsiwnlmw8ogfehHjMGm+QRZwazUXJs5\ng/bg+P8SImkIEss3lq8htgTxCqDxzQCwRulqUFDXAoGAY8+5dboKZF4PEfQJPsVy\nKs786jwS4+cCf5Y9JkJXEVufBwJbC3EuiGFSfzl1S2vPueJDcOw0phWFHYKytF42\no1L7gwQpy88o4aGLdNnL6C7pAd6y9KcqliLi5F99vT6ne/Ok7LKLINcIC3hJA/px\nlqeOFXfFbFz11csKHPISJ3g=\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-6sihz@el-rey-33b3b.iam.gserviceaccount.com",
};
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(service_acount),
    databaseURL: "https://el-rey-33b3b-default-rtdb.firebaseio.com/",
    storageBucket: "gs://el-rey-33b3b.appspot.com",
});
exports.storage_Ref = firebase_admin_1.default.storage().bucket();
