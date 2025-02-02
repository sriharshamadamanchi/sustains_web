// Copyright © 2025 Sustains AI, All Rights Reserved
import { all } from "redux-saga/effects";
import { loginSagas } from "../../auth/redux/sagas";
import { homeSagas } from "../../home/redux/sagas";

export function *sagas() {
  yield all([
    ...loginSagas,
    ...homeSagas
  ]);
}
