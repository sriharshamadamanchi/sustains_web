// Copyright © 2025 Sustains AI, All Rights Reserved
import { combineReducers } from "redux";
import { loaderReducer } from "../loaderRedux/reducer";
import { sessionReducer } from "../sessionRedux/reducer";
import { loginReducer } from "../../auth/redux/reducer";
import { homeReducer } from "../../home/redux/reducer";

export const reducers: any = combineReducers({
  loader: loaderReducer,
  login: loginReducer,
  session: sessionReducer,
  home: homeReducer
});
