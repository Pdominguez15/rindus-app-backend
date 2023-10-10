"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionController = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const middleware_1 = require("./config/middleware");
const profile_1 = require("./repository/knex/profile");
const google_1 = require("./services/jwt-validator/google");
const session_1 = require("./controllers/session");
const session_2 = require("./programs/session");
const store = (0, database_1.connectDatabase)();
const app = (0, express_1.default)();
// Session Controller
const profileRepository = new profile_1.KnexProfileRepository(store);
const jwtValidator = new google_1.GoogleJwtValidator();
const sessionProgram = new session_2.SessionProgram(jwtValidator, profileRepository);
exports.sessionController = new session_1.SessionController(sessionProgram);
exports.default = (0, middleware_1.configure)(app, store);
