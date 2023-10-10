"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const knex_1 = __importDefault(require("knex"));
const knex_2 = __importDefault(require("../../config/database/knex"));
function connectDatabase() {
    return (0, knex_1.default)(knex_2.default);
}
exports.connectDatabase = connectDatabase;
