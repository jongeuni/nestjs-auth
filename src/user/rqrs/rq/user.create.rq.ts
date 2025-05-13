/**
 * user create rq
 * @namespace UserCreateRq
 * @property email
 * @property password
 * @property name
 */
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateRq {
  /** 변경할 푸시 알림 설정값 */
  @ApiProperty({ description: '이메일' })
  email: string;
  @ApiProperty({ description: '비밀번호' })
  password: string;
  @ApiProperty({ description: '이름' })
  name: string;
}
