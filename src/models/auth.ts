import { IAuth } from "../interfaces/auth";
import { IUser } from "../interfaces/user";

export class Auth implements IAuth {
  accessToken: string | null;
  user: IUser | null;
  _id?: string | null;

  constructor({
    accessToken,
    user,
    _id,
  }: IAuth) {
    this.accessToken = accessToken;
    this.user = user;
    this._id = _id;
  }
}
