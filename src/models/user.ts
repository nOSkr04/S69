import { IUser } from "../interfaces/user";

export class User implements IUser {
  _id: string;
  username: string;
  notificationCount: number;

  constructor({ _id, username,notificationCount }: IUser) {
    this._id = _id;
    this.username = username;
    this.notificationCount = notificationCount;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
