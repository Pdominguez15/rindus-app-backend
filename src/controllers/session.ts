import { SessionProgram } from '@/programs/session';
import { Request, Response } from 'express';

export class SessionController {
  private readonly sessionProgram: SessionProgram;

  constructor(sessionService: SessionProgram) {
    this.sessionProgram = sessionService;
  }

  public async login(request: Request, response: Response) {
    const jwt = request.body?.jwt;

    if (!jwt) {
      return response.sendStatus(400);
    }

    const maybeUserId = await this.sessionProgram.login(jwt);

    if (maybeUserId !== undefined) {
      request.session.userId = maybeUserId;

      return response.sendStatus(200);
    }

    return response.sendStatus(401);
  }
}
