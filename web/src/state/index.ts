import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export type AppState = {
  ticker: string | undefined;
};

export const AppContext = React.createContext<AppState | undefined>(undefined);

export function useAppState(): AppState {
  const [ticker, setTicker] = React.useState<string | undefined>(undefined);

  return {
    ticker: ticker,
  };
}

export async function getStockData(ticker: string): Promise<any> {
  const config: AxiosRequestConfig = {
    headers: {
      ticker: ticker,
    },
  };
  const data = (await axios.post('localhost:3000/api/stock', config)).data;

  return data;
}
