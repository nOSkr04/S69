import { HttpRequest as BaseHttpRequest } from "../helpers";
// import { authLogout } from "../store/auth-slice";

export class HttpRequest extends BaseHttpRequest {
  
  uri = "http://192.168.1.74:1234";
  // errorHandler = (statusCode: number, error: HttpHandler): void => {
  //   if(statusCode === 401){
  //     store.dispatch(authLogout());
  //   }
  //   throw error;
  // };
}

export const delay = async (ms=400): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve,ms));
};