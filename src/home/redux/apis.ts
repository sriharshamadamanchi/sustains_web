// Copyright © 2025 Sustains AI, All Rights Reserved
import { mainAxios } from "../../common/apiWrapper";

export const fetchPortfoliosAPI = async ({ userId }: { userId: string }): Promise<any> => {
  const { data } = await mainAxios.get(`/api/portfolios/${userId}`);

  return data
}

export const createPortfolioAPI = async ({ userId, payload }: { userId: string, payload: { name: string, description: string} }): Promise<any> => {
  const { data } = await mainAxios.post(`/api/portfolios/${userId}`, payload);

  return data
}

export const updatePortfolioAPI = async ({ portfolioId, payload }: { portfolioId: string, payload: { name: string, description: string} }): Promise<any> => {
  const { data } = await mainAxios.put(`/api/portfolios/${portfolioId}`, payload);

  return data
}

export const deletePortfolioAPI = async ({ portfolioId }: { portfolioId: string }): Promise<any> => {
  const { data } = await mainAxios.delete(`/api/portfolios/${portfolioId}`);

  return data
}

export const fetchStocksAPI = async ({ portfolioId }: { portfolioId: string }): Promise<any> => {
  const { data } = await mainAxios.get(`/api/stocks/${portfolioId}`);

  return data
}

export const addStockAPI = async ({ portfolioId, payload }: { portfolioId: string, payload: any }): Promise<any> => {
  const { data } = await mainAxios.post(`/api/stocks/${portfolioId}`, payload);

  return data
}

export const updateStockAPI = async ({ stockId, payload }: { stockId: string, payload: any }): Promise<any> => {
  const { data } = await mainAxios.put(`/api/stocks/${stockId}`, payload);

  return data
}

export const deleteStockAPI = async ({ stockId }: { stockId: string }): Promise<any> => {
  const { data } = await mainAxios.delete(`/api/stocks/${stockId}`);

  return data
}
