export interface UserPayload {
  type: 'access' | 'refresh';
  id: string;
}

export interface AccessPayload extends UserPayload {
  type: 'access';
  email: string;
}

export interface RefreshPayload extends UserPayload {
  type: 'refresh';
}

export interface CustomJwtPayload {
  id: string;
  email: string;
}
