export interface IFetcher {
  url: string;
  method: string;
  body: any;
  json: boolean;
}
export interface IRegisterUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface ISigninUser extends IRegisterUser {}
export interface IFormState extends IRegisterUser {}
export interface ICreateJWTUser {
  id: string;
  email: string;
}
