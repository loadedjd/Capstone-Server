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

export default function ImgMediaCard(props: { img: string; title: string; desc: string; score: number; }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
          <CardActionArea>
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
                  <Typography gutterBottom variant="h6" color="textPrimary" component="h2">
                    {props.title}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item>
                <CardContent>
                  <PositiveColorTypography variant={'h5'} color={'primary'}>
                    {props.score}
                  </PositiveColorTypography>
                </CardContent>
              </Grid>
            </Grid>
          </CardActionArea>

    </Card>
  );
}