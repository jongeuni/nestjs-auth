import { HttpException, Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create.dto';
import { UserRepository } from './user.repository';
import { UserLoginDto } from './dto/user.login.dto';
import { Password } from './schema/password';
import { UserNotExistException } from '../exception/user.not-exist.exception';
import { UserBadCredentialException } from '../exception/user.bad-credential.exception';
import { User, UserDocument } from './schema/user.schema';
import { JwtUtil } from '../jwt/jwt.util';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtUtil: JwtUtil
  ) {}

  async create(dto: UserCreateDto) {
    await this.userRepository.save(dto);
  }

  async login(dto: UserLoginDto) {
    const user = await this.userRepository.findByEmail(dto.email);

    await this.userCompareCheck(user, dto.password);

    // create jwt
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtUtil.createAccessToken(user.id, user.email),
      this.jwtUtil.createRefreshToken(user.id, user.email)
    ]);

    return {
      accessToken,
      refreshToken
    };
  }

  private async userCompareCheck(user: UserDocument, password: string) {
    if (user == null) {
      throw new UserNotExistException();
    }
    if (await user.readPassword().comparePassword(password)) {
      throw new UserBadCredentialException();
    }
  }
}
