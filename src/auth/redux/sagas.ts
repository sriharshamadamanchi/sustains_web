// Copyright © 2025 Sustains AI, All Rights Reserved
import { call, put, takeLatest } from "redux-saga/effects"
import { LoginActionType, RegisterActionType, loggedInSuccessfullyAction, loginAction, logoutAction, registerAction, storeUserDetailsAction } from "./actions"
import { getActionType } from "../../common/store/typeSafe"
import { failedLoadingAction, startLoadingAction, successLoadingAction } from "../../common/loaderRedux/actions"
import { resetReducersAction } from "../../common/sessionRedux/actions"
import { loginAPI, registerAPI, userDetailsAPI } from "./apis"

export function *loginSaga(action: {payload: LoginActionType}): any {
  try {
    yield put(startLoadingAction({ name: "Login" }))
    const response = yield call(loginAPI, { payload: action.payload })
    const userDetails = response ?? {}
    if (userDetails.id) {
      const response = yield call(userDetailsAPI, { userId: userDetails.id })
      yield put(storeUserDetailsAction({ ...userDetails, ...response }))
    }

    yield put(loggedInSuccessfullyAction())
    yield put(successLoadingAction({ name: "Login", msg: "" }))
  } catch (error: any) {
    console.log("error in loginSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "Login", msg: "" }))
  }
}

export function *registerSaga(action: {payload: RegisterActionType}): any {
  try {
    yield put(startLoadingAction({ name: "Register" }))
    const response = yield call(registerAPI, { payload: action.payload })
    window.location.href = "/signin"
    if (response?.message) {
      alert(response.message)
    }
    yield put(successLoadingAction({ name: "Register", msg: "" }))
  } catch (error: any) {
    console.log("error in registerSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "Register", msg: "" }))
  }
}

export function *logoutSaga(): any {
  try {
    yield put(startLoadingAction({ name: "Logout" }))

    yield put(resetReducersAction())

    yield put(successLoadingAction({ name: "Logout", msg: "" }))
  } catch (error: any) {
    console.log("error in logoutSaga", error)
    yield put(failedLoadingAction({ name: "Logout", msg: "" }))
  }
}

export const loginSagas = [
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  takeLatest(getActionType(loginAction), loginSaga),
  takeLatest(getActionType(logoutAction), logoutSaga),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  takeLatest(getActionType(registerAction), registerSaga)
];
