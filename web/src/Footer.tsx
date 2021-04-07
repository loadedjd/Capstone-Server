import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    top:'calc(95%)',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default
  },
  root: {
    flexGrow: 1,
  },
  footer: {
    fontSize: 17,
    color:'textPrimary'
  },
}));
function Footer() {
  const classes = useStyles();
    return(
      <div className={classes.root}>
        <AppBar position={'fixed'} className={classes.appBar}>
             <Typography variant={'h6'} className={classes.footer} color={'textPrimary'}>
                 Ajay Kirtikar, Andrew Sanchez, Austin Rogers, Islam Talhi,
               Jared Williams 2021
             </Typography>
         </AppBar>
      </div>
    );
}

    export default Footer;
