"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexProfileRepository = void 0;
class KnexProfileRepository {
    constructor(db) {
        this.db = db;
    }
    findProfileId(email) {
        return this.db
            .table('users')
            .where('email', email)
            .first()
            .select('id');
    }
}
exports.KnexProfileRepository = KnexProfileRepository;
