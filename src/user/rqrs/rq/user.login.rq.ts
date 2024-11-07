/**
 * @namespace UserLoginRq
 * @property email
 * @property password
 */
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginRq {
  /** 변경할 푸시 알림 설정값 */
  @ApiProperty({ description: '이름' })
  email: string;
  @ApiProperty({ description: '이름' })
  password: string;
}
