/* eslint-disable no-use-before-define */
import React from 'react';
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Grid } from '@material-ui/core';

export default function SearchBar() {
  return (
    <Grid
      container
      spacing={3}
      direction={"row"}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <div style={{ width: 600 }}>
      <Autocomplete
        id="searchbar"
        size={"medium"}
        freeSolo
        options={top10Stocks.map((option) => option.title)}
        autoHighlight={true}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField {...params} label="Search a stock" margin="normal" variant="outlined" />
        )}
      />
    </div>
      </Grid>

    </Grid>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top10Stocks = [
  { title: 'Apple', ticker: 'AAPL'},
  { title: 'Facebook', ticker: 'FB'},
  { title: 'Microsoft', ticker: 'MSFT'},
  { title: 'Gamestop', ticker: 'GME' },
  { title: 'IBM', ticker: 'IBM' },
  { title: "Tesla", ticker: 'TSLA' },
  { title: 'Disney', ticker: 'DIS' },
  { title: 'AMC', ticker: 'AMC' },
  { title: 'Google', ticker: 'GOOGL' },
  { title: 'Netflix', ticker: 'NFLX'},
];