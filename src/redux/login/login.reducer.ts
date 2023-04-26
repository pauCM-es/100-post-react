import { AnyAction, Reducer } from 'redux';
import { ActionType } from './login.constants';

interface LoginState {
  username: string | null
  isLoggedIn: boolean
  loading: boolean,
  error: string | null,
}

const INITIAL_STATE: LoginState = {
  username: "admin",
  isLoggedIn: true,
  loading: false,
  error: null,
}

const loginReducer: Reducer<LoginState, AnyAction> = (state = INITIAL_STATE, action): LoginState => {

  const checkTypes: {[key: string]: LoginState} = {
    [ActionType.LOG_IN]: {
        ...state,
        username: action.payload,
        isLoggedIn: true
      },
    [ActionType.LOG_OUT]: {
        ...state,
        username: null,
        isLoggedIn: false,
      }
    }

    return checkTypes[action.type] ?? { ...state }
  }


export default loginReducer