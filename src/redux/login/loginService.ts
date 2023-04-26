import store from "../store";
import { loginAction, logoutAction } from "./login.actions-creator";
const { dispatch } = store;
// import axios from "axios";
// import { ActionType } from "./login.constants";

export interface LoginData {
  username: string | null
  password?: string
}

export const login = (data: LoginData):void => {
  // dispatch the type: LOG_IN to simulate some user logging in.
  dispatch(loginAction(data?.username!))
  

  // ---- POST request to back ----
  // axios.post("user/login", data)
  // .then((res) => {
  //   dispatch({ type: ActionType.LOGIN_OK, payload: res.data });
  //   localStorage.setItem("token", res.data.token);
  // })
  // .catch((error) => {
  //   dispatch({ type: ActionType.ERROR, payload: error.response.data });
  // });
};

export const logout = ():void => {
  dispatch(logoutAction());
};

