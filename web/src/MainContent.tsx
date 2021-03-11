
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import ImgMediaCard from "./NewsCard";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,

  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    height:'74vh',
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
            <Grid
              container
              spacing={1}
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  variant={'h4'}
                  color={'secondary'} >
                  Watson Discovery News
                </Typography>
              </Grid>
              <Grid item>
            <ImgMediaCard img={'gme.jpg'} desc={'Despite enthusiastic ' +
            'retail investors, intense market manipulation has lead GameStop to ' +
            'fall yet again'} title={'GameStop Crashes (Again)'}/>
              </Grid>
              <Grid item>
            <ImgMediaCard img={'roblox.jpg'} desc={'No, but their market share ' +
            'sure is rising!'} title={'Is Roblox the Next Apple?'}/>
              </Grid>
            <Grid item>
            <ImgMediaCard img={'stim.wbp'} desc={"Who could have predicted that stimulating the economy would " +
            "stimulate the economy?"} title={'BREAKING: Stimulus Sends Markets to the Moon'}/>
            </Grid>
            </Grid>
          </div>
      </main>
    );
}

    export default MainContent;

// const articles = (await axios.get('localhost:3000/api/news', 'gamestop')).data
// const news_element = <news stock='GameStop' articles='GameStop Stock Surging'/>;
