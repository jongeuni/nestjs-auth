import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateRq } from './rqrs/rq/user.create.rq';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user.create.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Password } from './schema/password';
import { UserLoginDto } from './dto/user.login.dto';
import { UserLoginRq } from './rqrs/rq/user.login.rq';
import { UserLoginRs } from './rqrs/rs/user.login.rs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'register', description: 'create user' })
  async register(@Body() rq: UserCreateRq) {
    await this.userService.create(
      new UserCreateDto(rq.email, await Password.create(rq.password), rq.name)
    );
  }

  @Post('/login')
  async login(@Body() rq: UserLoginRq): Promise<UserLoginRs> {
    return this.userService.login(new UserLoginDto(rq.email, rq.password));
  }
}
