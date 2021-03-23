import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ImgMediaCard from './NewsCard';
import gme from './gme.jpg';
import roblox from './roblox.jpg';
import stim from './stim.webp';
import WebIcon from '@material-ui/icons/Web';
import axios, { AxiosRequestConfig } from 'axios';
import { TwitterSummaryCard } from './TwitterBar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, withStyles } from "@material-ui/core/styles";

export async function useAxios(query: string) {
  const config: AxiosRequestConfig = {
    headers: {
      query: query,
    },
  };
  const response = await axios.get('localhost:3000', config);
  return response.data;
}

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const PositiveColorTypography = withStyles({
    root: {
        color: "#00D753"
    }
})(Typography);

function NewsBar() {
  //const gamestop_query = useAxios('gamestop')

  //  axios({ method:'get', url:'localhost:3000/api/news', responseType: 'json', headers: {'query': 'gamestop'}
  // })
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item>
            <WebIcon color={'secondary'} fontSize={'large'} />
          </Grid>
          <Grid item>
            <Typography variant={'h4'} color={'secondary'}>
              Watson Discovery News
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <NewsSummaryCard ticker={'$TSLA'} average={95} />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard
          img={gme}
          desc={
            'Despite enthusiastic ' +
            'retail investors, intense market manipulation has lead GameStop to ' +
            'fall yet again'
          }
          title={'GameStop Crashes (Again)'}
        />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard
          img={roblox}
          desc={'No, but their market share ' + 'sure is rising!'}
          title={'Is Roblox the Next Apple?'}
        />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard
          img={stim}
          desc={
            'Who could have predicted that stimulating the economy would ' +
            'stimulate the economy?'
          }
          title={'BREAKING: Stimulus Sends Markets to the Moon'}
        />
      </Grid>
    </Grid>
  );
}

export function NewsSummaryCard(props: { ticker: string; average: number }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <CardContent>
              <Typography variant="h4" color="textPrimary" component="h4">
                {props.ticker}
              </Typography>
              <PositiveColorTypography variant="h4" align="center" color="primary">
                {props.average}
              </PositiveColorTypography>
              <Typography variant="body1" color="textSecondary" component="p">
                {'WEEKLY SCORE'}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default NewsBar;
