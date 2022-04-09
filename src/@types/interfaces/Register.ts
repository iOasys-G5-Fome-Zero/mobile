export interface IRegisterRequest {
  name: string;
  userType: string;
  email: string;
  phone: string | null;
  password: string;
}

export interface IRegisterResponse {
  id: string;
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  phone: string | null;
  cpf: string | null;
  createdAt: string;
  updatedAt: string;
}
