// import {ExtractJwt, Strategy} from 'passport-jwt';
// import {PassportStrategy} from '@nestjs/passport';
// import {Injectable} from '@nestjs/common';
// import {toObjectId} from "@newrrow/api-common";
// import {AccessPayload} from "./payload";
// import {CurrentUserPayload} from "../user/auth.current-user";
//
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//     constructor() {
//         super({
//             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//             ignoreExpiration: false,
//             secretOrKey: process.env.JWT_ACCESS_SECRET_KEY
//         });
//     }
//
//     async validate(payload: AccessPayload): Promise<CurrentUserPayload> {
//         return {
//             id: toObjectId(payload.id),
//             name: payload.name,
//             role: payload.role
//         };
//     }
// }
