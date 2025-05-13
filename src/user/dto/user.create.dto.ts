/**
 * user create rq
 * @namespace UserCreateDto
 * @property email
 * @property password
 * @property name
 */
import { Password } from '../schema/password';

export class UserCreateDto {
  constructor(
    readonly email: string,
    readonly password: Password,
    readonly name: string
  ) {}
}
