import axios, { AxiosRequestConfig } from 'axios';
import { SentimentResponse, StockResponse } from '../models';

const apiUrl = 'http://localhost:3000/api';

export async function getStock(ticker: string): Promise<StockResponse> {
  const config: AxiosRequestConfig = {
    headers: {
      ticker: ticker,
    },
  };

  const data = (await axios.get(`${apiUrl}/stock`, config))
    .data as StockResponse;

  return data;
}

export async function getSentiment(ticker: string): Promise<SentimentResponse> {
  const config: AxiosRequestConfig = {
    headers: {
      ticker: ticker,
    },
  };

  const data = (await axios.get(`${apiUrl}/sentiment`, config))
    .data as SentimentResponse;

  return data;
}

export async function getNews(ticker: string): Promise<object> {
  const config: AxiosRequestConfig = {
    headers: {
      ticker: ticker,
    },
  };

  const data = (await axios.get(`${apiUrl}/news`, config)).data;

  return data;
}
