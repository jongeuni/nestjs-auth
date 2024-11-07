import { HttpException, HttpStatus } from '@nestjs/common';

export class UserBadCredentialException extends HttpException {
  constructor() {
    super('bad credential.', HttpStatus.NOT_FOUND);
  }
}
