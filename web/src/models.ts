export type StockResponse = {
  service: string;
  data: StockData;
};

export type StockData = {
  prices: number[];
};

export type NewsData = {};

export type SentimentResponse = {
  service: string;
  data: SentimentData;
};

export type SentimentData = {
  data: Tweet[];
};

export type Tweet = {
  text: string;
};
