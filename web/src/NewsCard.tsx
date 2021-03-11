import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import theme from './App';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor:'secondary',
      maxWidth: 345,
    },
    header:{
      backgroundColor: 'secondary',
    },
    media: {
      backgroundColor: 'secondary',
      height: 0,
    },
    actions:{
      backgroundColor: 'secondary',
    },

  }),
);

export default function ImgMediaCard(props: { img: string; title: string; desc: string; }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader="March 11, 2021"
      />
        <CardMedia
          className={classes.media}
          src={props.img}
          title="Article"
          component="img"
        />
      <CardActions disableSpacing>
      </CardActions>
        <CardContent>
          <Typography gutterBottom variant="body2" color="secondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
    </Card>
  );
}