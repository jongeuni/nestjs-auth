import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException
} from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';

// @Injectable()
// Delete because use passport.js
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtStrategy: JwtStrategy) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException();
    }
    const token = authHeader.split(' ')[1];

    request.user = this.jwtStrategy.validateAccessToken(token);

    return true;
  }
}
