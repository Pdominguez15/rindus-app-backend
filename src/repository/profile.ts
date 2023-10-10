export interface ProfileRepository {
  findProfileId: (_email: string) => Promise<string | undefined>;
}
