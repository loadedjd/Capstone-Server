import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    width: `calc(100%)`,
    marginLeft: drawerWidth,
    backgroundColor: "#000000"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  footer: {
    marginLeft: 20,
    fontSize: 17,
    color:'textPrimary'
  },
}));
function Footer() {
  const classes = useStyles();
    return(
     <AppBar position={'fixed'} className={classes.appBar}>
         <Typography variant={'h6'} className={classes.footer} color={'textPrimary'}>
             Ajay Kirtikar, Andrew Sanchez, Austin Rogers, Islam Talhi,
           Jared Williams 2021
         </Typography>
     </AppBar>
    );
}

    export default Footer;
