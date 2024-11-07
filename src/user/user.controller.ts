import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateRq } from './rqrs/rq/user.create.rq';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user.create.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Password } from './schema/password';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // create
  @Post()
  @ApiOperation({ summary: '유저 생성 API', description: '유저를 생성한다.' })
  async registration(@Body() rq: UserCreateRq) {
    return await this.userService.create(
      new UserCreateDto(rq.email, await Password.create(rq.password), rq.name)
    );
  }
}
