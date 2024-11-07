import { Module } from '@nestjs/common';
import { JwtUtil } from './jwt.util';

@Module({
  imports: [],
  providers: [JwtUtil],
  exports: [JwtUtil]
})
export class JwtModule {}
