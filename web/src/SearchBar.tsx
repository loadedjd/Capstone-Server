/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { AppContext } from './state';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  searchbar: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 960,
    width: 640,
    backgroundColor: theme.palette.background.default,
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const appState = React.useContext(AppContext);

  return (
    <Grid
      container
      spacing={1}
      direction={'column'}
      justify={'flex-start'}
      alignItems={'flex-start'}
    >
      <Grid item>
        <div className={classes.searchbar}>
          <TextField
            label="Search a stock"
            margin="normal"
            variant="outlined"
            onChange={(event) => {
              console.log(event.target.value);
              appState?.setTicker(event.target.value);
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top10Stocks = [
  { title: 'Apple', ticker: 'AAPL' },
  { title: 'Facebook', ticker: 'FB' },
  { title: 'Microsoft', ticker: 'MSFT' },
  { title: 'Gamestop', ticker: 'GME' },
  { title: 'IBM', ticker: 'IBM' },
  { title: 'Tesla', ticker: 'TSLA' },
  { title: 'Disney', ticker: 'DIS' },
  { title: 'AMC', ticker: 'AMC' },
  { title: 'Google', ticker: 'GOOGL' },
  { title: 'Netflix', ticker: 'NFLX' },
];
