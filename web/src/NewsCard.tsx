import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media:{
    height:130,
  },
});

export default function ImgMediaCard(props: { img: string; title: string; desc: string; }) {
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
        <CardContent >
          <Typography gutterBottom variant="h6" color="textPrimary" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}