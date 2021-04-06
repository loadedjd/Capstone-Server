
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import NewsBar from "./NewsBar"
import TwitterBar from "./twitter/TwitterBar"
import SearchBar from "./SearchBar"

import StockDisplay from "./Stock.Component/display"
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,

  title: {
    flexGrow: 1,
    backgroundColor: "#000000",
    padding: theme.spacing(3),
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
    spacing: 0,
    justify: 'space-around'
  },
}));
function MainContent() {
    const classes = useStyles();
    return (
      <main className={classes.fullWidth}>
          <div className={classes.toolbar} />
          <div className={classes.title}>
            <Typography variant={'h3'} color={'secondary'} >Trading made Elementary</Typography>
          </div>
          
          <div className={classes.content}>
            <SearchBar/>
            <Grid
              container
              spacing={10}
              direction={"row"}
              justify={"space-around"}
              alignItems={"flex-start"}
            >
              <Grid item>
                <NewsBar/>
              </Grid>
              <Grid item>
                <StockDisplay/>
              </Grid>
              <Grid item>
                <TwitterBar/>
              </Grid>
            </Grid>
            
          </div>
          
      </main>
    );
}

    export default MainContent;

// const articles = (await axios.get('localhost:3000/api/news', 'gamestop')).data
// const news_element = <news stock='GameStop' articles='GameStop Stock Surging'/>;
