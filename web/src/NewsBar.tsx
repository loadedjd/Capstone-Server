import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ImgMediaCard from './NewsCard';
import tsla1 from './tsla1.png';
import tsla2 from './tsla2.png';
import tsla3 from './tsla3.png';
import WebIcon from '@material-ui/icons/Web';
import axios, { AxiosRequestConfig } from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import upArrow from './twitter/uparrow.png';
import neutralArrow from './twitter/neutralarrow.png';
import downArrow from './twitter/downarrow.png';
import CardMedia from '@material-ui/core/CardMedia';

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
  media: {
        width: 50,
        marginLeft: -10,
    }
});

const PositiveColorTypography = withStyles({
    root: {
        color: "#00D753"
    }
})(Typography);

const NeutralColorTypography = withStyles({
    root: {
        color: "#84C3D3"
    }
})(Typography);

const NegativeColorTypography = withStyles({
    root: {
        color: "#FF0827"
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
        <NewsSummaryCard ticker={'$TSLA'} average={56} />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard
          img={tsla1}
          desc={
            'Tesla’s stock is overvalued and worth only $150, according to ' +
            'Craig Irwin, senior research analyst at Roth Capital, who said ' +
            'the electric carmaker must do more to justify its share price ' +
            'of nearly $700.'
          }
          title={
          'A Roth Capital analyst says Tesla’s stock is worth $150 — ' +
          'which would be a 78% discount'}
          link={"https://www.cnbc.com/2021/04/06/tesla-tlsa-stock-is-overvalued-and-worth-150-says-analyst.html"}
          score={24}
        />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard
          img={tsla2}
          desc={'The offer is primarily centered on busy urban Supercharger ' +
          'locations to help reduce cost.'}
          title={'Tesla offers nighttime 50% Supercharging discount in ' +
          'California'}
          link={"https://www.cnet.com/roadshow/news/tesla-supercharger-discount-night-charging-california/"}
          score={89}
        />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard
          img={tsla3}
          desc={
            'Is it cheaper to own a Toyota Camry or a Tesla Model 3 over ' +
            'five years? The only way to find out is to crunch the numbers.'
          }
          link={"https://insideevs.com/features/498553/tesla-model-3-vs-camry-cost-ownership/"}
          title={'Tesla Model 3 Vs Toyota Camry: 5-Year Cost Of Ownership ' +
          'Compared'}
          score={55}
        />
      </Grid>
    </Grid>
  );
}

export function NewsSummaryCard(props: { ticker: string; average: number; }) {
    const classes = useStyles();

    var summaryImage;
    var TextColor;
    if (props.average > 60) {
        summaryImage = upArrow;
        TextColor = PositiveColorTypography;
    }
    else if (props.average > 40) {
        summaryImage = neutralArrow;
        TextColor = NeutralColorTypography;
    }
    else {
        summaryImage = downArrow;
        TextColor = NegativeColorTypography;
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >

                        <Grid item>
                            <Typography variant="h4" color="textPrimary" component="h4">
                                {props.ticker}
                            </Typography>
                        </Grid>

                        <Grid item style={{marginLeft: "15%"}}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <TextColor variant="h4" align="center">
                                    {props.average}

                                </TextColor>
                                <CardMedia
                                    className={classes.media}
                                    component={'img'}
                                    image={summaryImage}
                                    alt="Summary Icon"
                                />
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {"WEEKLY SCORE"}
                            </Typography>
                        </Grid>

                    </Grid>
                </CardContent>
            </CardActionArea >
        </Card >
    );
}

export default NewsBar;
