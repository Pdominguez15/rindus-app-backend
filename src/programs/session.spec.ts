import { SessionProgram } from '@/programs/session';
import {
  MockProfileRepository,
  mockFindProfileId,
} from '@/repository/__mocks__/profile';
import {
  MockJwtValidator,
  mockValidateToken,
} from '@/services/__mocks__/jwt-validator';

describe('SessionProgram:', () => {
  let sessionProgram: SessionProgram;

  beforeAll(() => {
    const mockJwtValidator = new MockJwtValidator();
    const mockProfileRepository = new MockProfileRepository();
    sessionProgram = new SessionProgram(
      mockJwtValidator,
      mockProfileRepository,
    );
  });

  describe('login', () => {
    const token = 'foo';

    it('should return profile based on email', async () => {
      const profileId = await sessionProgram.login(token);

      expect(mockValidateToken).toHaveBeenCalledTimes(1);
      expect(mockFindProfileId).toHaveBeenCalledTimes(1);
      expect(profileId).toEqual('profileId');
    });

    it('should not fetch profile if no email', async () => {
      mockValidateToken.mockResolvedValueOnce(undefined);

      const profileId = await sessionProgram.login(token);

      expect(mockValidateToken).toHaveBeenCalledTimes(1);
      expect(mockFindProfileId).not.toHaveBeenCalled();
      expect(profileId).toEqual(undefined);
    });

    it('should return undefined if no profile', async () => {
      mockFindProfileId.mockResolvedValueOnce(undefined);

      const profileId = await sessionProgram.login(token);

      expect(mockValidateToken).toHaveBeenCalledTimes(1);
      expect(mockFindProfileId).toHaveBeenCalledTimes(1);
      expect(profileId).toEqual(undefined);
    });
  });
});
