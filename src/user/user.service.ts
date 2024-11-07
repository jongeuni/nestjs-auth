import { HttpException, Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create.dto';
import { UserRepository } from './user.repository';
import { UserLoginDto } from './dto/user.login.dto';
import { Password } from './schema/password';
import { UserNotExistException } from '../exception/user.not-exist.exception';
import { UserBadCredentialException } from '../exception/user.bad-credential.exception';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: UserCreateDto) {
    await this.userRepository.save(dto);
  }

  async login(dto: UserLoginDto) {
    const user = await this.userRepository.findByEmail(dto.email);

    await this.userCompareCheck(user, dto.password);

    // create jwt
  }

  private async userCompareCheck(user: User, password: string) {
    if (user == null) {
      throw new UserNotExistException();
    }
    if (!(await user.password.comparePassword(password))) {
      throw new UserBadCredentialException();
    }
  }
}
