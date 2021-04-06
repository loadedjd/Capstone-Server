import axios, { AxiosRequestConfig } from 'axios';

const apiUrl = 'http://localhost:3000/api';

export async function getStock(ticker: string): Promise<object> {
  const config: AxiosRequestConfig = {
    headers: {
      ticker: ticker,
    },
  };

  const data = (await axios.get(`${apiUrl}/stock`, config)).data;

  return data;
}

export async function getSentiment(ticker: string): Promise<object> {
  const config: AxiosRequestConfig = {
    headers: {
      ticker: ticker,
    },
  };

  const data = (await axios.get(`${apiUrl}/sentiment`, config)).data;

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
