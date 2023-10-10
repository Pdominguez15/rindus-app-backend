import { ProfileRepository } from '@/repository/profile';
import { JwtValidator } from '@/services/jwt-validator';

export class SessionProgram {
  private readonly jwtValidator: JwtValidator;

  private readonly profileRepository: ProfileRepository;

  constructor(
    jwtValidator: JwtValidator,
    profileRepository: ProfileRepository,
  ) {
    this.jwtValidator = jwtValidator;
    this.profileRepository = profileRepository;
  }

  /**
   * Validates provided JWT and returns userId if profile found
   * @param jwt
   * @returns userId if profile was found, undefined otherwise
   */
  public async login(jwt: string): Promise<string | undefined> {
    const email = await this.jwtValidator.validateToken(jwt);

    if (email !== undefined) {
      const profileId = await this.profileRepository.findProfileId(email);

      if (profileId !== undefined) {
        return profileId;
      }
    }

    return undefined;
  }
}
