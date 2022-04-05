export interface IUser {
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  phone: string;
  cpf: string;
}

export interface IUserResponse {
  id: string;
  first_name: string;
  last_name: string;
  user_type: string;
  email: string;
  phone: string;
  cpf: string;
  createdAt: string;
  updatedAt: string;
}
