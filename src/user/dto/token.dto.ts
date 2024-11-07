/**
 * user login rq
 * @namespace UserLoginDto
 * @property email
 * @property password
 */

export class TokenDto {
  constructor(
    readonly accessToken: string,
    readonly refreshToken: string
  ) {}
}
