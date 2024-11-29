import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import mongoose from "mongoose";
import { AccessPayload } from '../jwt/payload';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): AccessPayload => {
    return ctx.switchToHttp().getRequest().user;
  }
);

export interface CurrentUserPayload {
  id: mongoose.Types.ObjectId;
  name: string;
}
