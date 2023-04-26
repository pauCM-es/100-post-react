import { LogInAction, LogOutAction } from "./login.action.types";
import { ActionType } from "./login.constants";


export const loginAction = (username: string): LogInAction => {
  return { 
    type: ActionType.LOG_IN, 
    payload: username 
  };
}

export const logoutAction = (): LogOutAction => {
  return { type: ActionType.LOG_OUT };
}