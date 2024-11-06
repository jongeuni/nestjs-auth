import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: UserCreateDto) {
    await this.userRepository.save(dto);
  }
}
