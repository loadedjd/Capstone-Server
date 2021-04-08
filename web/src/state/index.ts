import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { StockData } from '../models';
import { getStock } from '../Services/api.service';

export type AppState = {
  ticker: string | undefined;
  stockData: StockData | undefined;
  setTicker: (ticker: string) => void;
};

export const AppContext = React.createContext<AppState | undefined>(undefined);

export function useAppState(): AppState {
  const [ticker, setTicker] = React.useState<string | undefined>('TSLA');
  const [stockData, setStockData] = React.useState<StockData | undefined>(
    undefined,
  );

  React.useEffect(() => {
    console.log('USE EFFECT', ticker);

    getStock(ticker ?? '').then((response) => {
      setStockData(response.data);
    });
  }, [ticker]);

  return {
    ticker: ticker,
    stockData,
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
