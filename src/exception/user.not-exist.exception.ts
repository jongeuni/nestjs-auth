import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotExistException extends HttpException {
  constructor() {
    super('non-existent user.', HttpStatus.NOT_FOUND);
  }
}
