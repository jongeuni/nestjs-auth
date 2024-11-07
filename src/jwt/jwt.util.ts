import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtUtil {
  constructor(private readonly jwtService: JwtService) {}

  private readonly access_secret_key = 'test';
  private readonly refresh_secret_key = 'test';
  private readonly access_expires_in = '5m';
  private readonly refresh_expires_in = '5m';

  async createAccessToken(id: string, email: string): Promise<string> {
    return this.jwtService.sign(
      {
        id,
        email
      },
      {
        secret: this.access_secret_key,
        expiresIn: this.access_expires_in
      }
    );
  }

  async createRefreshToken(id: string, email: string): Promise<string> {
    return this.jwtService.sign(
      {
        id,
        email
      },
      {
        secret: this.refresh_secret_key,
        expiresIn: this.refresh_expires_in
      }
    );
  }
}
