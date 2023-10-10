"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
const cors_1 = __importDefault(require("cors"));
const connect_session_knex_1 = __importDefault(require("connect-session-knex"));
const express_session_1 = __importDefault(require("express-session"));
const session_1 = __importDefault(require("../config/session"));
const express_1 = __importDefault(require("express"));
const logger_1 = require("../config/logger");
const configure = (app, knex) => {
    app.disable('x-powered-by');
    app.use((0, logger_1.httpLoggerMiddleware)());
    app.use('/login', express_1.default.json());
    app.use((0, cors_1.default)());
    const store = new ((0, connect_session_knex_1.default)(express_session_1.default))({
        knex,
    });
    app.use((0, express_session_1.default)((0, session_1.default)(store)));
    return app;
};
exports.configure = configure;
