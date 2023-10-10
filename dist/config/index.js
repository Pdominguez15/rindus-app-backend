"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
switch (process.env.NODE_ENV) {
    case 'production':
        (0, dotenv_1.config)({ path: '.env.production' });
        break;
    default:
        (0, dotenv_1.config)({ path: '.env.development' });
}
