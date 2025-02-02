// Copyright © 2025 Sustains AI, All Rights Reserved
import { action } from "../../common/store/typeSafe";

export type FetchPortfoliosActionType = {
    userId: string;
}

export const fetchPortfoliosAction = (payload: FetchPortfoliosActionType): any => action("src/home/redux/fetchPortfoliosAction", payload);

export type StorePortfoliosActionType = {
    name: string,
    description: string,
    created_at: string,
    id: string, user_id:
    string
}[]

export const storePortfoliosAction = (payload: StorePortfoliosActionType): any => action("src/home/redux/storePortfoliosAction", payload);

export type FetchStocksActionType = {
    portfolioId: string;
}

export const fetchStocksAction = (payload: FetchStocksActionType): any => action("src/home/redux/fetchStocksAction", payload);

export type StoreStocksActionType = {
    portfolioId: string;
    stocks: {
        symbol: string
        name: string
        quantity: number
        purchase_price: number
        purchase_date: string
        currency: string
        notes: string
    }[]
}

export const storeStocksAction = (payload: StoreStocksActionType): any => action("src/home/redux/storeStocksAction", payload);

export type CreatePortfolioActionType = {
    userId: string;
    name: string;
    description: string;
}

export const createPortfolioAction = (payload: CreatePortfolioActionType): any => action("src/home/redux/createPortfolioAction", payload);

export type UpdatePortfolioActionType = {
    userId: string;
    portfolioId: string;
    name: string;
    description: string;
}

export const updatePortfolioAction = (payload: UpdatePortfolioActionType): any => action("src/home/redux/updatePortfolioAction", payload);

export type DeletePortfolioActionType = {
    userId: string;
    portfolioId: string;
}

export const deletePortfolioAction = (payload: DeletePortfolioActionType): any => action("src/home/redux/deletePortfolioAction", payload);

export type AddSddStockActionType = {
    portfolioId: string
    symbol: string
    name: string
    quantity: number
    purchase_price: number
    purchase_date: string
    currency: string
    notes: string
}

export const addStockAction = (payload: AddSddStockActionType): any => action("src/home/redux/addStockAction", payload);

export type UpdateStockActionType = {
    portfolioId: string
    stockId: string
    symbol: string
    name: string
    quantity: number
    purchase_price: number
    purchase_date: string
    currency: string
    notes: string
}

export const updateStockAction = (payload: UpdateStockActionType): any => action("src/home/redux/updateStockAction", payload);

export type DeleteStockActionType = {
    portfolioId: string
    stockId: string
}

export const deleteStockAction = (payload: DeleteStockActionType): any => action("src/home/redux/deleteStockAction", payload);
