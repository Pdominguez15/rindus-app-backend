"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: process.env.NODE_ENV === 'production',
    },
    pool: {
        min: 2,
        max: 10,
    },
};
exports.default = config;
