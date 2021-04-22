export type StockResponse = {
  service: string;
  data: StockData;
};

export type StockData = {
  description: string;
  //recommendation: string
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
