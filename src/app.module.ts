import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';

@Module({
  // input your mongo db uri
  // you can use 'nestjs/config'
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-auth'),
    UserModule
  ],
  controllers: [AppController, UserController, BoardController],
  providers: [AppService, AuthService, BoardService]
})
export class AppModule {}
