import axios from 'axios';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from "./TopBar";
import MainContent from "./MainContent";
import Footer from "./Footer";
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function Home() {
    const classes = useStyles();
    return(
      <div className={classes.root}>
          <TopBar />
          <MainContent />
          <Footer />
      </div>
    );
}

    export default Home;

// const articles = (await axios.get('localhost:3000/api/news', 'gamestop')).data
// const news_element = <news stock='GameStop' articles='GameStop Stock Surging'/>;
