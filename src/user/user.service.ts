import { Injectable } from '@nestjs/common';
import { UserCreateDto } from "./dto/user.create.dto";

@Injectable()
export class UserService {

  async create(dto: UserCreateDto) {

  }
}
