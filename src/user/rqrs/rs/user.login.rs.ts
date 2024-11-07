import { ApiProperty } from '@nestjs/swagger';
import { TokenDto } from '../../dto/token.dto';

export class UserLoginRs {
  @ApiProperty({ description: 'access token' })
  accessToken: string;
  @ApiProperty({ description: 'refresh token' })
  refreshToken: string;
}
