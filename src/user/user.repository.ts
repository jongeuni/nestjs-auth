import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { UserCreateDto } from './dto/user.create.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) readonly userModel: Model<UserDocument>
  ) {}

  async save(user: UserCreateDto) {
    const model = new this.userModel({
      ...user,
      password: user.password.readPassword()
    });
    const saved = await model.save();
    console.log(saved);
  }
}
