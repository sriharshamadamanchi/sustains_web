// Copyright © 2025 Sustains AI, All Rights Reserved
import { call, debounce, put } from "redux-saga/effects"
import { AddSddStockActionType, CreatePortfolioActionType, DeletePortfolioActionType, DeleteStockActionType, FetchPortfoliosActionType, FetchStocksActionType, UpdatePortfolioActionType, UpdateStockActionType, addStockAction, createPortfolioAction, deletePortfolioAction, deleteStockAction, fetchPortfoliosAction, fetchStocksAction, storePortfoliosAction, storeStocksAction, updatePortfolioAction, updateStockAction } from "./actions"
import { getActionType } from "../../common/store/typeSafe"
import { failedLoadingAction, startLoadingAction, successLoadingAction } from "../../common/loaderRedux/actions"
import { addStockAPI, createPortfolioAPI, deletePortfolioAPI, deleteStockAPI, fetchPortfoliosAPI, fetchStocksAPI, updatePortfolioAPI, updateStockAPI } from "./apis"

export function *fetchPortfoliosSaga(action: {payload: FetchPortfoliosActionType}): any {
  try {
    yield put(startLoadingAction({ name: "Portfolios" }))
    const response = yield call(fetchPortfoliosAPI, { userId: action.payload.userId })
    yield put(storePortfoliosAction(response))
    yield put(successLoadingAction({ name: "Portfolios", msg: "" }))
  } catch (error: any) {
    console.log("error in loginSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "Portfolios", msg: "" }))
  }
}

export function *createPortfolioSaga(action: {payload: CreatePortfolioActionType}): any {
  try {
    yield put(startLoadingAction({ name: "CreatePortfolio" }))
    yield call(createPortfolioAPI, { userId: action.payload.userId, payload: { name: action.payload.name, description: action.payload.description } })
    yield call(fetchPortfoliosSaga, { payload: { userId: action.payload.userId } })
    yield put(successLoadingAction({ name: "CreatePortfolio", msg: "" }))
  } catch (error: any) {
    console.log("error in createPortfolioSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "CreatePortfoli", msg: "" }))
  }
}

export function *updatePortfolioSaga(action: {payload: UpdatePortfolioActionType}): any {
  try {
    yield put(startLoadingAction({ name: "UpdatePortfolio" }))
    yield call(updatePortfolioAPI, { portfolioId: action.payload.portfolioId, payload: { name: action.payload.name, description: action.payload.description } })
    yield call(fetchPortfoliosSaga, { payload: { userId: action.payload.userId } })
    yield put(successLoadingAction({ name: "UpdatePortfolio", msg: "" }))
  } catch (error: any) {
    console.log("error in updatePortfolioSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "UpdatePortfolio", msg: "" }))
  }
}

export function *deletePortfolioSaga(action: {payload: DeletePortfolioActionType}): any {
  try {
    yield put(startLoadingAction({ name: "DeletePortfolio" }))
    yield call(deletePortfolioAPI, { portfolioId: action.payload.portfolioId })
    yield call(fetchPortfoliosSaga, { payload: { userId: action.payload.userId } })
    yield put(successLoadingAction({ name: "DeletePortfolio", msg: "" }))
  } catch (error: any) {
    console.log("error in deletePortfolioSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "DeletePortfolio", msg: "" }))
  }
}

export function *fetchStocksSaga(action: {payload: FetchStocksActionType}): any {
  try {
    yield put(startLoadingAction({ name: "Stocks" }))
    const response = yield call(fetchStocksAPI, { portfolioId: action.payload.portfolioId })
    yield put(storeStocksAction({ portfolioId: action.payload.portfolioId, stocks: response }))
    yield put(successLoadingAction({ name: "Stocks", msg: "" }))
  } catch (error: any) {
    console.log("error in fetchStocksSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "Stocks", msg: "" }))
  }
}

export function *addStockSaga(action: {payload: AddSddStockActionType}): any {
  try {
    yield put(startLoadingAction({ name: "AddStock" }))
    const newPayload = { ...action.payload, portfolioId: null }
    yield call(addStockAPI, { portfolioId: action.payload.portfolioId, payload: newPayload })
    yield call(fetchStocksSaga, { payload: { portfolioId: action.payload.portfolioId } })
    yield put(successLoadingAction({ name: "AddStock", msg: "" }))
  } catch (error: any) {
    console.log("error in addStockSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "AddStock", msg: "" }))
  }
}

export function *updateStockSaga(action: {payload: UpdateStockActionType}): any {
  try {
    yield put(startLoadingAction({ name: "UpdateStock" }))
    const newPayload = { ...action.payload, stockId: null, portfolioId: null }
    yield call(updateStockAPI, { stockId: action.payload.stockId, payload: newPayload })
    yield call(fetchStocksSaga, { payload: { portfolioId: action.payload.portfolioId } })
    yield put(successLoadingAction({ name: "UpdateStock", msg: "" }))
  } catch (error: any) {
    console.log("error in createPortfolioSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "updateStockSaga", msg: "" }))
  }
}

export function *deleteStockSaga(action: {payload: DeleteStockActionType}): any {
  try {
    yield put(startLoadingAction({ name: "DeleteStock" }))
    yield call(deleteStockAPI, { stockId: action.payload.stockId })
    yield call(fetchStocksSaga, { payload: { portfolioId: action.payload.portfolioId } })
    yield put(successLoadingAction({ name: "DeleteStock", msg: "" }))
  } catch (error: any) {
    console.log("error in deleteStockSaga", error)
    if (error?.response?.data?.message) {
      alert(error.response.data.message)
    }
    yield put(failedLoadingAction({ name: "DeleteStock", msg: "" }))
  }
}

export const homeSagas = [
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debounce(300, getActionType(fetchPortfoliosAction), fetchPortfoliosSaga),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debounce(300, getActionType(fetchStocksAction), fetchStocksSaga),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debounce(300, getActionType(createPortfolioAction), createPortfolioSaga),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debounce(300, getActionType(updatePortfolioAction), updatePortfolioSaga),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debounce(300, getActionType(deletePortfolioAction), deletePortfolioSaga),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debounce(300, getActionType(addStockAction), addStockSaga),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debounce(300, getActionType(updateStockAction), updateStockSaga),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  debounce(300, getActionType(deleteStockAction), deleteStockSaga)
];
