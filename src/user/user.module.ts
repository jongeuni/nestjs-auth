import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository]
})
export class UserModule {}
