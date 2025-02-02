// Copyright © 2025 Sustains AI, All Rights Reserved
import { resetReducersAction } from "../../common/sessionRedux/actions";
import { createReducer, resetState } from "../../common/store/typeSafe";
import { StorePortfoliosActionType, StoreStocksActionType, storePortfoliosAction, storeStocksAction } from "./actions";

const initialState = {
  portfolios: [],
  stocks: {}
};

export interface homeReducerStateType {
  portfolios: { name: string, description: string, created_at: string, id: string, user_id: string }[]
  stocks: { [key: string]: {
    symbol: string
    name: string
    quantity: number
    purchase_price: number
    purchase_date: string
    currency: string
    notes: string
   }[]
  }
}

export const homeReducer = createReducer(initialState)
  .handleAction(
    storePortfoliosAction,
    (state: homeReducerStateType, action: {payload: StorePortfoliosActionType}) => {
      state.portfolios = action.payload
    }
  )
  .handleAction(
    storeStocksAction,
    (state: homeReducerStateType, action: {payload: StoreStocksActionType}) => {
      state.stocks[action.payload.portfolioId] = action.payload.stocks
    }
  )
  .handleAction(resetReducersAction, resetState(initialState));

