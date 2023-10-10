import { ProfileRepository } from '@/repository/profile';

export const mockFindProfileId = jest.fn().mockReturnValue('profileId');

export class MockProfileRepository implements ProfileRepository {
  findProfileId: (_email: string) => Promise<string | undefined> =
    mockFindProfileId;
}
