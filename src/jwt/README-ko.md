#### passport.js 모듈 없이 구현해보기
`passport.js` 모듈은 거의 모든 NestJs 개발자가 흔히 씁니다.
저는 이번 프로젝트에서 사용할지 말지 고민을 많이했고, 초보자에게 알려주는 게 목적이기 때문에 사용하기로 결정하였습니다.
블로그 주소: 이곳을 참고해서 여러분의 생각을 확실시하세요.

```ts
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
```

```ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';

@Injectable()
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

```
```ts
@Module({
  imports: [],
  providers: [JwtUtil, JwtService, JwtStrategy],
  exports: [JwtUtil, JwtService, JwtStrategy]
})
export class JwtModule {}
```

헤더에 이렇게 보내면 인증이 됩니다.
Authorization: Bearer token~

config service에 대한 간략한 포스팅이 있어서 첨부합니다.
https://dlawlgus40.tistory.com/91?category=1083056