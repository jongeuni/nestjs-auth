import { Module } from '@nestjs/common';
import { JwtUtil } from './jwt.util';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule],
  providers: [JwtUtil, JwtService, JwtAuthGuard, JwtStrategy],
  exports: [JwtUtil, JwtService, JwtAuthGuard, JwtStrategy]
})
export class JwtModule {}
