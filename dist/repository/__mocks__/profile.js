"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockProfileRepository = exports.mockFindProfileId = void 0;
exports.mockFindProfileId = jest.fn().mockReturnValue('profileId');
class MockProfileRepository {
    constructor() {
        this.findProfileId = exports.mockFindProfileId;
    }
}
exports.MockProfileRepository = MockProfileRepository;
