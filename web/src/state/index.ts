import React from 'react';

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
