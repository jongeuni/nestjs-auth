import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, Document } from 'mongoose';
import { Password } from './password';

// you can use class-validator
@Schema()
export class User {
  @Prop({
    required: true,
    unique: true
  })
  email: string;
  @Prop()
  password: string;
  @Prop()
  name: string;
  @Prop()
  isWritten: boolean;
  @Prop({ default: null })
  lastLoginDate: Date;
  @Prop({ default: now() })
  createdAt: Date;
}

export interface UserDocument extends User, Document {
  readPassword(): Password;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.readPassword = function (): Password {
  return Password.fromHashedPassword(this.password);
};

export { UserSchema };
