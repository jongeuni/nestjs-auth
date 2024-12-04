import { UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { AccessPayload, CustomJwtPayload } from '../payload';

// @Injectable()
// // Delete because use passport.js
export class JwtStrategy {
  private readonly secret = 'test';

  validateAccessToken(token: string): AccessPayload {
    try {
      const payload = jwt.verify(token, this.secret) as CustomJwtPayload;
      return {
        type: 'access',
        id: payload.id,
        email: payload.email
      };
    } catch (error) {
      console.log(error.json);
      throw new UnauthorizedException();
    }
  }
}
