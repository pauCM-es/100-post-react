import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

import postsReducer  from './posts/postsSlice'
import loginReducer from './login/login.reducer';

const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    posts: postsReducer,
    login: loginReducer
  }
})

export default store;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>
