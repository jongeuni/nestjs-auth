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
  password: Password;
  @Prop()
  name: string;
  @Prop()
  isWritten: boolean;
  @Prop({ default: null })
  lastLoginDate: Date;
  @Prop({ default: now() })
  createdAt: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
