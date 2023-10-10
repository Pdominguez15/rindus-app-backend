"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (store) => ({
    secret: process.env.SESSION_SECRET || 'supersecret',
    cookie: {
        maxAge: 86400,
        secure: process.env.ENV === 'production',
    },
    store,
    resave: false,
    saveUninitialized: true,
});
