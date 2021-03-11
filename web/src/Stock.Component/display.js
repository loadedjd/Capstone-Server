import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000/api/stock'
})

export default class StockDisplay extends React.Component {
  
  constructor(){
    super();
    api.get('/').then(res =>{
      console.log(res.data)
    })
  }

  render() {
    return (
      <p>test</p>
    )
  }
}