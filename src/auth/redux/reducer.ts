// Copyright © 2025 Sustains AI, All Rights Reserved
import { resetReducersAction } from "../../common/sessionRedux/actions";
import { createReducer, resetState } from "../../common/store/typeSafe";
import { StoreUserDetailsActionType, loggedInSuccessfullyAction, resetLoginReducerAction, storeUserDetailsAction } from "./actions";

const initialState = {
  isLoggedIn: false,
  user: {}
};

export interface loginReducerStateType {
  isLoggedIn: boolean
  user: {
    email?: string
    name?: string
    id?: string
  },
}

export const loginReducer = createReducer(initialState)
  .handleAction(
    loggedInSuccessfullyAction,
    (state: loginReducerStateType) => {
      state.isLoggedIn = true
    }
  )
  .handleAction(
    storeUserDetailsAction,
    (state: loginReducerStateType, action: {payload: StoreUserDetailsActionType}) => {
      state.user = { ...state.user, ...action.payload }
    }
  )
  .handleAction(resetLoginReducerAction, resetState(initialState))
  .handleAction(resetReducersAction, resetState(initialState));

