export interface ILogin {
  phoneOrEmail: string;
  password: string;
  checked?: boolean;
}

export interface ILoginResponse {
  id: string;
  first_name: string;
  last_name: string;
  user_type: string;
  email: string;
  phone: null | string;
  cpf: null | string;
  password: string;
  token: string;
  refresh_token: string;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}
