import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateRq } from './rqrs/rq/user.create.rq';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user.create.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // create
  @Post()
  async registration(@Body() rq: UserCreateRq) {
    return await this.userService.create(
      new UserCreateDto(rq.email, rq.password, rq.name)
    );
  }
}
