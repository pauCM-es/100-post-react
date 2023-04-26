import { ActionType } from "./login.constants";


export interface LogInAction {
  type: ActionType.LOG_IN
  payload: string
}
export interface LogOutAction {
  type: ActionType.LOG_OUT
}

// export type LoginAction = LogInAction | LogOutAction