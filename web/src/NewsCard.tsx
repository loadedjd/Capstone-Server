import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media:{
    height:130,
  },
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

export default function ImgMediaCard(props: { img: string; title: string; desc: string; score: number; link: string }) {
  const classes = useStyles();
      var TextColor;
    if (props.score > 60) {
        TextColor = PositiveColorTypography;
    }
    else if (props.score > 40) {
        TextColor = NeutralColorTypography;
    }
    else {
        TextColor = NegativeColorTypography;
    }
  return (
    <Card className={classes.root}>
          <CardActionArea>
            <a href={props.link} target="_blank" style={{ textDecoration: 'none' }}>
            <CardMedia
              className={classes.media}
              component={'img'}
              image={props.img}
              alt="Article"
            />
            <Grid
              container
              spacing={1}
              direction={'row'}
              wrap={'nowrap'}
              alignItems={'center'}
              >
              <Grid item>
                <CardContent >
                  <Typography gutterBottom variant="body1" color="textPrimary" component="h2">
                    {props.title}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item>
                <CardContent>
                  <TextColor variant={'h5'} color={'primary'}>
                    {props.score}
                  </TextColor>
                </CardContent>
              </Grid>
            </Grid>
            </a>
          </CardActionArea>

    </Card>
  );
}