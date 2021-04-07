
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

  fullWidth: {
    width: 'calc(100%)',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1)
  },
}));
function MainContent() {
    const classes = useStyles();
    return (
      <main className={classes.fullWidth}>
          <div className={classes.toolbar} />
            <Grid
              container
              spacing={1}
              direction={"column"}
              justify={"center"}
              alignItems={"stretch"}
              >
              <Grid item>
                <SearchBar/>
              </Grid>
              <Grid item>
                <Grid
                  container
                  spacing={0}
                  direction={"row"}
                  justify={"space-evenly"}
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
              </Grid>
            </Grid>
      </main>
    );
}

    export default MainContent;

// const articles = (await axios.get('localhost:3000/api/news', 'gamestop')).data
// const news_element = <news stock='GameStop' articles='GameStop Stock Surging'/>;
