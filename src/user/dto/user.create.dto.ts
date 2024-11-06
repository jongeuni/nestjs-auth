/**
 * user create rq
 * @namespace UserCreateDto
 * @property email
 * @property password
 * @property name
 */

export class UserCreateDto {
  constructor(
    readonly email: string,
    readonly password: string,
    readonly name: string
  ) {}
}
