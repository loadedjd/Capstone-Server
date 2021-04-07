/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Grid } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  searchbar: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft:960,
    width:640,
    backgroundColor: theme.palette.background.default
  }
}));

export default function SearchBar() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={1}
      direction={"column"}
      justify={"flex-start"}
      alignItems={"flex-start"}
      >
      <Grid item>
        <div className={classes.searchbar}>
         <Autocomplete
            id="searchbar"
            size={"medium"}
            freeSolo
            options={top10Stocks.map((option) => option.title)}
            autoHighlight={true}
            renderInput={(params) => (
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