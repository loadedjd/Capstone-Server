export type StockResponse = {
  service: string;
  data: StockData;
};

export type StockData = {
  prices: number[];
};

export type NewsData = {};
