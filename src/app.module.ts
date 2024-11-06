import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './user/user.repository';
import { User, UserDocument } from './user/schema/user.schema';
import { Model } from 'mongoose';
import { UserModule } from './user/user.module';

@Module({
  // input your mongo db uri
  // you can use nestjs/config
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-auth'),
    UserModule
  ],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    AuthService,
  ]
})
export class AppModule {}
