/**
 * @namespace UserLoginRq
 * @property email
 * @property password
 */
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginRq {
  /** 변경할 푸시 알림 설정값 */
  @ApiProperty({ description: '이메일' })
  email: string;
  @ApiProperty({ description: '비밀번호' })
  password: string;
}
