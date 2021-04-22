import React from 'react';
 import Plot from 'react-plotly.js';
 import { AppContext } from '../state';


 class StockGraph_v2 extends React.Component {

  static contextType = AppContext;
  
   constructor(props) {
     super(props);
     this.state = {
       stockChartXValues: [],
       stockChartYValues: []
     }
     
   }

   componentDidMount() {
     this.fetchStock();
   }

   fetchStock() {
    const ticker = this.context.ticker
     const pointerToThis = this;
     console.log(pointerToThis);
     const API_KEY = 'HGJWFG4N8AQ66ICD';
     let StockSymbol = ticker;
     let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
     let stockChartXValuesFunction = [];
     let stockChartYValuesFunction = [];

     fetch(API_Call)
       .then(
         function(response) {
           return response.json();
         }
       )
       .then(
         function(data) {
           console.log(data);

           for (var key in data['Time Series (Daily)']) {
             stockChartXValuesFunction.push(key);
             stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
           }

           // console.log(stockChartXValuesFunction);
           pointerToThis.setState({
             stockChartXValues: stockChartXValuesFunction,
             stockChartYValues: stockChartYValuesFunction
           });
         }
       )
   }

   render() {
     return (
       <div>
         <Plot
           data={[
             {
               x: this.state.stockChartXValues,
               y: this.state.stockChartYValues,
               type: 'scatter',
               mode: 'lines+markers',
               marker: {color: 'red'},
             }
           ]}
           layout={{width: 720, height: 440, title: ""}}
         />
       </div>
     )
   }
 }

 export default StockGraph_v2;