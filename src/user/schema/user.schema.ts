import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, Document } from 'mongoose';

// you can use class-validator
@Schema()
export class User {
  @Prop()
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

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
