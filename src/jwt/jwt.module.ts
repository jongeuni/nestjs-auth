import { Module } from '@nestjs/common';
import { JwtUtil } from './jwt.util';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [],
  providers: [JwtUtil, JwtService, JwtStrategy],
  exports: [JwtUtil, JwtService, JwtStrategy]
})
export class JwtModule {}
