import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
  @Prop()
  lastLoginDate: boolean;
  @Prop()
  createdAt: boolean;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
