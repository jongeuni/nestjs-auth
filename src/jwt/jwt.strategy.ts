import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { AccessPayload, CustomJwtPayload } from './payload';

@Injectable()
export class JwtStrategy {
  private readonly secret = 'test'; // 비밀키 설정

  validateAccessToken(token: string): AccessPayload {
    try {
      const payload = jwt.verify(token, this.secret) as CustomJwtPayload; // 디코딩된 데이터를 반환
      console.log(payload);
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
