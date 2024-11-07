export interface UserPayload {
  type: 'access' | 'refresh';
  id: string;
}

export interface AccessPayload extends UserPayload {
  type: 'access';
  email: string;
  // role: UserRole;
}

export interface RefreshPayload extends UserPayload {
  type: 'refresh';
}
