"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLoggerMiddleware = exports.logger = void 0;
const pino_1 = __importDefault(require("pino"));
const pino_http_1 = require("pino-http");
const logLevel = process.env.NODE_ENV === 'test' ? 'silent' : process.env.LOG_LEVEL || 'info';
exports.logger = (0, pino_1.default)({ level: logLevel });
const httpLoggerMiddleware = () => (0, pino_http_1.pinoHttp)({ logger: exports.logger, useLevel: 'trace' });
exports.httpLoggerMiddleware = httpLoggerMiddleware;
