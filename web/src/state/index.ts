import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export type AppState = {
  ticker: string | undefined;
  setTicker: (ticker: string) => void;
};

export const AppContext = React.createContext<AppState | undefined>(undefined);

export function useAppState(): AppState {
  const [ticker, setTicker] = React.useState<string | undefined>('TSLA');

  return {
    ticker: ticker,
    setTicker,
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
