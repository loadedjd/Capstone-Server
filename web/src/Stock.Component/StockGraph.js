import React from 'react';
import Plot from 'react-plotly.js';
import { AppContext } from '../state';

const Stock = () => {
  const state = React.useContext(AppContext);

  return (
    <div>
      {/* <h1>Graph</h1> */}
      <Plot
        data={[
          {
            x: [
              'Jan',
              'Feb',
              'Mar',
              'April',
              'May',
              'Jume',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            y: state?.stockData?.prices ?? [],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
        ]}
        layout={{ width: 720, height: 440, title: '' }}
      />
    </div>
  );
};

export default Stock;
