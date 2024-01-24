import { IAuth } from "../interfaces/auth";
import { IUser } from "../interfaces/user";

export class Auth implements IAuth {
  token: string | null;
  user: IUser | null;
  _id?: string | null;

  constructor({
    token,
    user,
    _id,
  }: IAuth) {
    this.token = token;
    this.user = user;
    this._id = _id;
  }
}
