"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionProgram = void 0;
class SessionProgram {
    constructor(jwtValidator, profileRepository) {
        this.jwtValidator = jwtValidator;
        this.profileRepository = profileRepository;
    }
    /**
     * Validates provided JWT and returns userId if profile found
     * @param jwt
     * @returns userId if profile was found, undefined otherwise
     */
    login(jwt) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = yield this.jwtValidator.validateToken(jwt);
            if (email !== undefined) {
                const profileId = yield this.profileRepository.findProfileId(email);
                if (profileId !== undefined) {
                    return profileId;
                }
            }
            return undefined;
        });
    }
}
exports.SessionProgram = SessionProgram;
