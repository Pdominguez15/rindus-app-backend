import express from 'express';

import { connectDatabase } from '@/config/database';
import { configure } from '@/config/middleware';
import { KnexProfileRepository } from '@/repository/knex/profile';
import { GoogleJwtValidator } from '@/services/jwt-validator/google';
import { SessionController } from '@/controllers/session';
import { SessionProgram } from '@/programs/session';

const store = connectDatabase();
const app = express();

// Session Controller
const profileRepository = new KnexProfileRepository(store);
const jwtValidator = new GoogleJwtValidator();
const sessionProgram = new SessionProgram(jwtValidator, profileRepository);
export const sessionController = new SessionController(sessionProgram);

export default configure(app, store);
