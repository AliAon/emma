export interface User {
  id: string;
  email?: string;
  role?: string;
  phone?: string;
  created_at?: string;
  updated_at?: string;
  name?: string;
}
export interface SignInCredentials {
  email: string;
  password: string;
}
export interface Session {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface SignUpCredentials {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  role?: string;
}
