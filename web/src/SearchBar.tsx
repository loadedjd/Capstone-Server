/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { AppContext } from './state';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  searchbar: {
    backgroundColor: theme.palette.background.default,
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const appState = React.useContext(AppContext);
  const [term, setTerm] = React.useState<string>('');

  return (
    <div>
      <TextField
        label="Search a stock"
        margin="normal"
        variant="outlined"
        onChange={(event) => {
          console.log(event.target.value);
          setTerm(event.target.value);
        }}
        value={term}
      />
      <div className={classes.searchbar}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            appState?.setTicker(term);
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

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
