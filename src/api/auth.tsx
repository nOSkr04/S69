import { ILoginForm } from "../components/auth/login-form";
import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const login = async (data: ILoginForm) => {
  const res = await httpRequest.post("/login", data);
  return res;
};
