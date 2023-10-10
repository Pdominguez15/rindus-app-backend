"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
function getAllUsers(pg) {
    return pg.table('users');
}
exports.getAllUsers = getAllUsers;
