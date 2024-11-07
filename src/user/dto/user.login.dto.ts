/**
 * user login rq
 * @namespace UserLoginDto
 * @property email
 * @property password
 */

export class UserLoginDto {
  constructor(
    readonly email: string,
    readonly password: string
  ) {
  }
}
